const name = "hatim"
const repoCount = 50

// old method of output
// console.log(name + repoCount + " Value");

//new method of output using `` (backticks)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`hitesh-hc-com`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   Hatim    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hatim.com/hatim%20rampurawala"
console.log(url.replace('%20', '-'));
console.log(url.includes('hatim'));

console.log(gameName.split('-'));
