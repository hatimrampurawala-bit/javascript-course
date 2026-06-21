# JavaScript Basics

## How to show output

```Js
console.log(accountId);
console.table([accountId, accountEmail])
```
1. **console.log** -- shows direct output for a single field
2. **condole.table** -- shows the output in a nice tabular format

## Variable basics
Variables store information for the user

### Types of variables
 
```Js
const accountId = 144553;
let accountEmail = "hatim@gmail.com";
var accountPassword = "12345";
accountCity = "Nashik";
let accountState;
```
1. **const** is short of **Constant** i.e. the value of the variable cannot be changed
2. Types of variables that can be changed
- **let** is the is the mordern way of defining variables in javascript.
- **var** is the old way of defining variables in javascipt
- We prefer not to use var because of issue in block scope "{ }" and function scope [?]
3. Variables can be denfined without using **let** or **var**
4. And variables can be defined without a **Value** where the output will show *"undefined"*

## DataTypes in JavaScript

- **Number** - 2 to the power of 53
- **bigint** - used for very big numbers generally in stock market sites or reddit or google
- **string** - " " OR ' '
- **boolean** - true OR false
- **null** - standalone value --Empty value
- **undefined** - Datetype not defined
- **symbol** - unique
- **object**

## conversion and operation in JavaScript

**Datatypes** can be converted into other data types in JS. the syntax is as follows

```Js
let someNumber = 33
let stringNumber = String(someNumber)
```
### explanation

we defined a variable as **someNumber** and gave it a value of *33* which is a **Number** datatype. later in the second line we defined another variable as **stringNumber** and that variable stores the converted data type, which in this case we converted Number to => **String**

#### Syntax

```txt
<defineVariable> <newVariable> = <dataTypeConversion>(<value>)
```

### String to Number conversion

#### Converting to Negative datatypes

```Js
let value = 3
let negValue = -value
```
we simply assign a **Negative (-)** to the variable

#### Common Operations

```Js
console.log(2 + 2);  // addition
console.log(2 - 2);  // substraction
console.log(2 * 2);  // multiplication
console.log(2 ** 3); // power
console.log(2 / 2);  // division
console.log(2 % 3);  // modulus or remainder
```

#### Adding strings together

variables or different datatypes can be added using operators in Javascript

eg:
```Js
let str1 = "hello"
let str2 = " hatim"

let str3 = str1 + str2 // output => hello hatim
```
#### Adding different datatypes together

adding different types of datatypes can give some intresting results

eg:
```Js
console.log("1" + 2); // output => 12
console.log(1 + "2"); // output => 12
console.log("1" + 2 + 2); // output => 122
console.log(1 + 2 + "2"); // output => 32
```
#### operations on boolean data

a **Plus (+)** can used with boolean data types like *true* OR *false* where the plus represents increment in the data and *true = 1* and *false = 0*

eg:
```Js
console.log(+true); // output => 1
console.log(+""); // output => 0
```
#### Prefix and Postfix operations and Syntax

```Js
let gameCounter = 100
gameCounter++; // postfix => value increases after usage
++gameCounter; // prefix => value increases before usage
console.log(gameCounter);
```
there is behaviour changes with using **prefix** or **postfix** for more detail read [Increment (++) mdm_resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

## Comparision in Javascript

conversion operations are used to compare same or different datatypes with one another.

### common comparisions
all the data is of the type: **number**

```JS
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
```
### comparing different datatypes
a **string** can be compared with a **number** Javascript with automatically convert that datatype in its most suitable format.

```Js
console.log("2" > 1);
console.log("02" > 1);
```
### Null and undefined comparisions
conversion of the above type are confusing and should be avoided due to uncertainity in the output

```Js
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
```
***Note***: The reason for unexpected result is that an equality check "==" and comparisons "> < >= <=" work differently.
comparisons convert null to a number, treating it as 0.
that's why (3) null >=0 is true and (1) null >0 is false.

## Memory in Js
In Javascript there are two different types of memory
1. **Stack Memory**
2. **Heap Memory**

### 1. Stack Memory
Stack memory is used for primitive datatypes 
check [[datatypes.md]] for detailed information on different datatypes

Stack memory => provides you with a copy of your variable

Eg:
```Js
let myYoutubeName = "hatimdotcom"

let anotherName = myYoutubeName
anotherName = "guddudotcom"

console.log(anotherName);
console.log(anotherName);
```
Output:
```txt
guddudotcom
guddudotcom
```

### 2. Heap Memory
Heap memory is used for non primitive datatypes

Heap memory => provides reference of the original value. changes made here will be reflected in the original value

Eg:
```Js
let userOne = {
  email: "hatim@google.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "guddu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
```
Output:
```txt
guddu@google.com
guddu@google.com
```
