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

let sedanFilter = carBrands.filter((car) => car.type == "sedan");

console.log(sedanFilter);
/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

console.log(reverseString("cat"));

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

function maxString(array) {
  let maxLength = ""; 
  for (let string of array) {
    if (string.length > maxLength.length) {
      maxLength = string;
    } else {
      //do nothing
    }
  }
  return maxLength;
}

console.log(maxString(["cd","a", "ab", "abc","four"]));

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

console.log(wishlist.reduce((preVal, curVal) => ({price: preVal.price + curVal.price})));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
//------------------------------------------------
// Recursion is a function that calls itself and it will continue calling itself until
// it is stopped. A recursive function is composed of two important parseInt, one being 
// the base case, this is the condition that will stop the recursive function from ending.
// The second part is a different input, so each time the function is going to be called,
// it is very important, that it receives a different value each time, so that it eventually
// reaches the base case.


//An example in code of a recursive function is a finding the factorial of a number
//the code goes like this:

// function factorial(num){
//   if(num === 0){  // this is our base case
//     return 1;
//   }else{
//     return num * factorial(num - 1); //this is where our input is changing each time
//   }
// }
//---------------------------------------

//6. OOP has 4 pillars and we learned about each in this phase.
//Choose the pillar you are most comfortable with
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as
//instructors and you will be banished to the nether realms.

//Inheritance is the approach of sharing common functionality within a collection of classes.
//Inheritance allows one class to inherit the attribute and methods from another, the one which
//inherits the class is known as the child class. Since javascript is much different from other
//oop languages, inheritenace works slightly different, however the inheritance functionality
//can still be achieved.

//An example of this is using the extends keyword

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
// }

//Here we created a class named Car and Model, Car is the parent class, while Model is 
//the child class, and therefore Model will inherit the methods from the Car class. The 
//super method refers to the parent class which here will give access to the parent's properties
//and methods




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
const flipBool = (arr) => {
  let newArr = arr.map((val) => val === true ? val = false : val = true);
  return newArr;
};

console.log(flipBool([false]));

console.log(flipBool([false, true, false]));

// 8.
//FEAST OR FAMINE
//  - Write a function that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`


function feastOrFamine(animal, food){
  if(animal.length >= 2 && animal == animal.toLowerCase() && food.length >= 2 && food == food.toLowerCase()){
    if(animal[0] === food[0] && animal[animal.length-1] && food[food.length-1]){
      return animal[0]+ animal[animal.length-1];
    }else{
      return false;
    }
  }else{
    return "words must be atleast 2 characters long and lowercase";
  }

}

console.log(feastOrFamine("great blue heron", "garlic naan"));
console.log(feastOrFamine("salmon", "fish n chips"))
console.log(feastOrFamine("H", "NO"));