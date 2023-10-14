function generatePassword(data) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  
  let collection = []

  // according to data option, add character to collection
  if(data.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if(data.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if(data.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if(data.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove excludeCharacters from collection
  if(data.excludeCharacters) {
    collection = collection.filter(character => !data.excludeCharacters.includes(character))
  }
  
  // if collection is empty values, return error message
  if(collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  // generate password
  let password = ''
  for (let i = 1; i <= data.passwordLength; i++) {
    password += singleCharacter(collection)
  }
  return password
}
// generate single character & randomIndex
function singleCharacter(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}
//let generatePassword function export
module.exports = generatePassword