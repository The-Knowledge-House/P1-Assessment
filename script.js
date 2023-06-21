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
const filtered = carBrands.filter(function (car) {
  return car.type === 'sedan'
});
console.log(filtered);



// /* 2.
//  * reverseString takes a string
//  * and should return the reverse of the string, you cannot use .reverse method
//  * e.g., reverseString('cat') => 'tac'
//  */
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}
console.log(reverseString('omaha'));



 // 3.
 // Write a function that takes an array of strings,
 // and returns the longest string in the array
let foods = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
let longest = foods.reduce((a, b) => a.length > b.length ? a : b, '');
console.log(longest);



// // 4.
// // Using Reduce,
// // Given an array of all your wishlist items, figure out
// // how much it would cost to just buy everything at once
// // In other words, the total of all the prices in the array
// // of objects
// // The output should eqaute to 227005
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {
  let initialValue = 0
  let sum = [{price: 90000}, {price: 45000}, {price: 5}, {price: 2000}, {price: 90000}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue
  );
};
console.log(shop(wishlist));




// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
    From my understanding, recursion is when a function keeps calling itself until a condition is met or fulfilled. The best way I can explain recursion is by using an analogy,
    think of it as if you was a paper boy doing your routes. You have to go pick up the paper from the printer (or whever you go), fill up your carry bag (or trunk) and then go deliver door-to-door.
    Once you did your first route, you go back to the pick up more paper and go door-to-door again. The recurion is occurring every time you go back and pick up more paper to finish and/or continue routes,
    the difference is as you go make your rounds, you have less routes to make and less paper to pick up until you no longer have to pick up paper or deliver door-to-door. Every time you go back to re-up
    on paper you're completing a route and taking it off your list untill  you no more routes left.





 //6. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.
      // The 4 pillars of OOP are Abstraction, Encapsulation, Inheritance and Polymorphism. Encapsulation is the idea of bundndling up 
      // attributes (data) and methods into an Object, like a class. It allows the object to be able to reference itself when it needs to access 
      // data or functions to manipulate data. It also allows objects/classes to hide variables data from other objects providing for better safety meaures.
      // This prevents other classes/objects from inadverdently changing properties in another object/class unless otherwise allowed to by the class's public methods and data.




// /*  7.
//  * flipBool takes an array of Boolean values
//  * it should call map on the array and flip
//  * each Boolean value to its opposite,
//  * e.g., flipBool([true]) => [false]
//  *       flipBool([false, true]) => [true, false]
//  *       etc
//  * then return the new array
//  * Be sure to use map()!
//  */
let boolarray = [true, false];
const flipBool = (bools) => {
  return bools.map(function(bool) {return !bool})
};
console.log(flipBool(boolarray));



// // 8.
// //FEAST OR FAMINE
// //  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
// //  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
// //  - otherwise, if the letters do not match, return false
// // > i.e.:
// // > input => `"great blue heron", "garlic naan"`
// // > output => `"gn"`
function matchFirst (feast, famine) {
}