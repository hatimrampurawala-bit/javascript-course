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
