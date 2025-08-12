const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value")
//this is an old method to define string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// ``they are backticks left to 1 on keyboard

const gameName = new String('hitesh-hc')

console.log(gameName[0])// h
console.log(gameName.__proto__)// {}:object


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)// gives starting 4 charqcters

const anotherString = gameName.slice(-8,4)//slice me negative values de sakte h
console.log(anotherString)// gives ite

const newStringOne = "   hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim())// removes white spaces

const url = "https://hitesh.com/hitesh%10helloo"

console.log(url.replace('%10','-'))
console.log(url.includes('sundar'))//false

//to convert string i aaray

console.log(gameName.split('-'))//[ 'hitesh', 'hc' ]


