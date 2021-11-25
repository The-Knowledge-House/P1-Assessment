// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];
let newArr = []
for (let i = 0; i < carBrands.length; i++) {
  if (carBrands[i].type == "sedan") {
    newArr.push(carBrands[i]);
  }
}
console.log(newArr);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
function revString(str){
  let newString = "";
  for (let i = str.length-1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(revString("money"));
console.log(revString("Braun Payne"));

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
const arrOfStr = ["phone", "seance", "London", "stow", "pizzeria"];

function longestStr() {
  let newArr = [];
  let longest = 0;

  for (let i = 0; i < arrOfStr.length; i++) {
    if (arrOfStr[i].length >= longest) {
      longest = arrOfStr[i].length;
    }
  }
 return longest
}
console.log(longestStr(arrOfStr));

// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];

let total = wishlist.reduce(function (a, b) {
  return {price: a.price + b.price};
});
console.log(total);

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

let answer1 = "Recusion is when a function calls itself until someone stops it. This allows you to perform a unit of work multiple times. for/while loops are examples of this!"
console.log(answer1);

let example = " An example of recursion is the following function: ";
let exOfRec = function countDown(num) {
  if (num === 0) {
    console.log('liftoff')
  }
  else {
    console.log(num);
    countDown(num - 1)
  }
};
console.log(example);
console.log(exOfRec);

//6. OOP has 4 pillars and we learned about each in this phase.
//Choose the pillar you are most comfortable with
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as
//instructors and you will be banished to the nether realms.


/*  7.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */
const flipBool = (arr) => {};

// 8.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
