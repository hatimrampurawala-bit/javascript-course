# DataTypes in JavaScript

***Official Reference:***
[11.4.3 The typeof Operator](https://262.ecma-international.org/5.1/#sec-11.4.3)

---
There are two major datatypes in Js
1. **Primitive**
2. **Refrence** (non primitive)


## Primitive datatype
In primitive datatypes there are **7** types

### 1. **String**
strings can contain letters, words, numbers and special symbols.

Eg:
```Js
let userName = "hatim"
let userSurname = 'rampurawala'
```
### 2. **Number**
Numbers can contain numerical value's for integers and floats.

Eg:
```Js
let age = 22
let score = 202.36
```
### 3. **Boolean**
Boolean can contain either True or False values.

Eg:
```Js
let isLoggedIn = true
let userActive = false
```
### 4. **Null**
Null contains an empty value

Eg:
```Js
const outsideTemp = null
```
### 5. **Undefined**
Undefined means a value is yet to be assigened to that variable *Undefined* does not equal *Null*

Eg:
```Js
let userEmail;
```
### 6. **Symbol**
Symbol assigns a *Unique value* to is variable even if the data inside the variable is same

Eg:
```Js
const id = Symbol('123')
const anotherId = Symbol('123')
```
### 7. **BigInt**
BigInt is used for scientific or mathematical values that are too big to calculate.

Eg:
```Js
const bigNumber = 3215465481315135151351n
```
### Return type of all primitive datatypes

```txt
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint
```
## Reference datatypes (non primitive)
there are **3** widely used reference datatypes in Javascript

### 1. **Array**
Arrays are used to store multiple types of datatypes within its variable

Eg:
```Js
const heros = ["shaktiman", "naagraj", "doga"];
```
### 2. **Objects**
Objects represents a collection of key-value pairs (properties)

Eg:
```Js
let myObj = {
  name: "hatim",
  age: 22,
}
```
### 3. **Functions**
A Function represents a reusable block of code that can be invoked or called with arguments

Eg:
```Js
const myFunction = function(){
  console.log("hello world");
}
```
### Return type of all non primitive or reference datatypes

```txt
Arrays  =>  object
Function  =>  function
Object  =>  object
```
## Questions

1. **Is Javascript a dynamic OR static language**

**ANS:** (*based on comments*) JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
