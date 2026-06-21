// ******* Basic comparision *******
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// ******* comparing different datatypes *******
// console.log("2" > 1);
// console.log("02" > 1);

// ******* null comparision *******
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// conversion of the above type are confusing and should be avoided due to uncertainity in the output

/*
The reason for unexpected result is that an equality check "==" and comparisons "> < >= <=" work differently.
comparisons convert null to a number, treating it as 0.
that's why (3) null >=0 is true and (1) null >0 is false.
*/
