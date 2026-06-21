// Primitive

// 7 types: string, Number, Boolean, Null, undefined, symbol, BigInt

// is JS a dynamic language or static language?
const score = 100
const score1 = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3215465481315135151351n

/* Reference: https://262.ecma-international.org/5.1/#sec-11.4.3 */

// Reference (Non Primitive)

// types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "hatim",
  age: 22,
}

const myFunction = function(){
  console.log("hello world");
}

// console.log(typeof bigNumber);

// **************** Memory ****************

// Stack memory (primitive)
// Stack memory => provides you with a copy of your variable

let myYoutubeName = "hatimdotcom"

let anotherName = myYoutubeName
anotherName = "guddudotcom"

// console.log(anotherName);
// console.log(anotherName);

let userOne = {
  email: "hatim@google.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "guddu@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Heap memory (non primitive)
// Heap memory => provides reference of the original value. changes made here will be reflected in the original value.
