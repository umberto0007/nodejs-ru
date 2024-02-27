const {myName, myHobbies, myFavoriteNumber} = require('./multiple-exports')
const {myName: myOtherName, myFriendsName, myGreatHobbies} = require('./export-and-import')
const greetingFn = require('./my-modules/single-export')
// do not use absolute paths
//const  greetingFn = require('/Work/BACK/node/03-commonjs-modules/single-export.js')

// Imports from multiple-exports
console.log(myName)
console.log(myHobbies)
console.log(myFavoriteNumber)

// mutates array in the multiple-exports module!
myHobbies.push('cross-country race')

// Import from single-export
console.log(greetingFn)
greetingFn(myName)

// Imports from export-and-import
console.log(myOtherName)
console.log(myFriendsName)
console.log(myGreatHobbies)