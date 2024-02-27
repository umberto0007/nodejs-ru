function greeting(name) {
    console.log('Hello', name)
}

// console.log(__filename)

module.exports = greeting

// Do not this!
// module.exports remains {}
//exports = greeting