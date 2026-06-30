// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "Hatim",
  "full name": "Hatim Rampurawala",
  [mySym]: "mykey1",
  age: 25,
  location: "Nashik",
  email: "hatim@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hatim@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hatim@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
}

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
