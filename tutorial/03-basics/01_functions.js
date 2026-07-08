//console.log("H");
//console.log("A");
//console.log("T");
//console.log("I");
//console.log("M");

function sayMyName() {
  console.log("H");
  console.log("A");
  console.log("T");
  console.log("I");
  console.log("M");
}

//sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }
//
// const result = addTwoNumbers(3, 5);
//
// console.log("Result: ", result);

function loginUserMessage(username) {
  if (username === undefined) {
    //console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "Hatim",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

handleObject(user);
