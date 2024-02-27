import EventEmitter from 'events';

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likesQty = 0
        this.on('likePost', (driver) => {
            console.log(`${driver} jumped on your bike!`)
        })
        this.on('error', (error) => {
            console.log(error)
        })
    }

    like(driver) {
        if (!driver) {
            return this.emit('error', new Error('No driver for my bike!'))
        }
        this.likesQty += 1
        this.emit('likePost', driver)
    }
}

const myPost = new Post('An', 'Cycle bike!')


// console.log(myPost.author)
// console.log(myPost.text)
// console.log(myPost.likesQty)
myPost.like('Alex')
setTimeout(() => myPost.like(), 1000)
setTimeout(() => myPost.like('lava'), 2000)
// console.log(myPost.likesQty)