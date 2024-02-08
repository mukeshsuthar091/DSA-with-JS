const fullName = "Mukesh Suthar";
const age = 21;

// ` `  it is a backtics
// console.log(`Hello! My name is ${fullName} and my age is ${age}.`)   

const str = new String('Mukesh');

// console.log(str[0])
// console.log(str.__proto__)

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.charAt(3))
// console.log(str.charCodeAt(0))
// console.log(str.at(2))
// console.log(str.indexOf('s'))
// console.log(str.substring(0,3))
// console.log(str.slice(-3,5))


const str1 = new String("    javascript      ")
// console.log(str1.trim())
// console.log(str1.trimStart())
// console.log(str1.trimEnd())

const url = "http://www.google.com/wallpaper%20cars";
// console.log(url);

// const newURL = url.replace('google', 'youtub')
// const newURL = url.replace('%20', '-')
// const newURL = url.replaceAll('%20', '-')
console.log(newURL);

// console.log(url.includes('cars'))
// console.log(url.includes('bike'))

const nameStr = "mukesh-b-suthar"
console.log(nameStr.split(''))
console.log(nameStr.split('', 6))   // with limit
console.log(nameStr.split('-'))
