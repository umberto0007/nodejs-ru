import {Transform} from 'stream'
import fs from 'fs'

const upperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase()
        callback(null, upperCased)
    }
})

const reversStream = new Transform({
    transform(chunk, encoding, callback) {
        const arrayOfChars = chunk.toString().split('')
        const lastChar = arrayOfChars.pop()
        const reversed = arrayOfChars.reverse().concat(lastChar).join('')
        callback(null, reversed)
    }
})

process.stdin.pipe(upperCaseStream).pipe(reversStream).pipe(process.stdout)

// // Pipe to file
// const filePath = './files/stdin-dum.txt'
// const writeStream = fs.createWriteStream(filePath)
// process.stdin.pipe(writeStream)
//
// //Pipe to stdout
// process.stdin.pipe(process.stdout)