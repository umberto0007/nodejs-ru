const myName = 'An'
const myHobbies = ['cycling', 'cycling more', 'and cycling more']
const myFavoriteNumber = 55

console.log('Text from the multiple-exports CommonJS module')

// module.exports and export reference the same object in memory
module.exports.myName = myName
exports.myHobbies = myHobbies
exports.myFavoriteNumber = myFavoriteNumber