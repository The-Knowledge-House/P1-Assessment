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

//  const getLongestString = (words) => {
//   const longestWord = () => {
//       let longestWord = " ";
//       for (let i = 0; i < words.length; i++) {
//               const element = words[i];
//           for (let word = i -1; word >= 0; word--) {
//               if ((words[i].length > words[word].length) && (words[i] > 1)){
//                   longestWord = words[i];
//                   // longestWord = longestWord.toString();
//                   // return longestWord;
//               };
//           };
//       };
//       console.log(`The longest word is \"${longestWord}.\" It contains ${longestWord.length} characters.`);
//   };
// getLongestString(Array);

let longest = foods.reduce((a, b) => a.length > b.length ? a : b, '');
console.log(longest);

// // 4.
// // Using Reduce,
// // Given an array of all your wishlist items, figure out
// // how much it would cost to just buy everything at once
// // In other words, the total of all the prices in the array
// // of objects
// // The output should eqaute to 227005
// let wishlist = [
//   { title: "tesla", price: 90000 },
//   { title: "tesla", price: 45000 },
//   { title: "tesla", price: 5 },
//   { title: "tesla", price: 2000 },
//   { title: "tesla", price: 90000 },
// ];
// function shop(arr) { }
// console.log(shop(wishlist));




// // 5.
// //Explain recursion in your own words,
// // give an example of a recursive algorithm, and explain how it works
// //Make sure to detail the steps that make up a recursive algorithm
// // A detailed explanation.





// //6. OOP has 4 pillars and we learned about each in this phase. 
// //Choose the pillar you are most comfortable with 
// //and explain it in simple terms with an example.
// //Also, if you cannot explain any of them, we have failed as 
// //instructors and you will be banished to the nether realms.


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
// const flipBool = (arr) => { };

// // 8.
// //FEAST OR FAMINE
// //  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
// //  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
// //  - otherwise, if the letters do not match, return false
// // > i.e.:
// // > input => `"great blue heron", "garlic naan"`
// // > output => `"gn"`
