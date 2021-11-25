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

const sedanCars = carBrands.filter( cars =>
  cars.type === "sedan"
)
console.log(sedanCars)

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
function reverseString(str){
  let myString = ""
  for(let i = str.length -1; i >=0; i--){
    // myString.push(arr[i])
    myString = myString + str[i]
  }
  return myString
}
console.log(reverseString('cat'))

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

function longestString(arr){
  let count = 0
  let longest = ""
  for(let i =0; i < arr.length; i++){
    if(arr[i].length > count){
      count = arr[i].length
      longest = arr[i]
    }
  }
  return longest
}
console.log(longestString(['abcde', 'apples', 'bananas', 'spagetti', 'lasagna']))

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
function shop(arr) {
  let total = arr.reduce((acc, curr) => acc + curr.price, 0)
  return total
}
console.log(shop(wishlist));

// 5.
// Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
// Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

// Data structure that deals with function that are called a call stack. 
// A stack is essentially a data structure. Whenever we call a function it is placed(pushed) 
// on top of the call stack. Once our program sees a return statement or when the function ends, the complied will
// remove the top item of the call stack. You are invoking the same function with a different input 
// until we reach our base case which is the condition where the recursion ends. The recursive call 
// is when you call the function recursively.

//6. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms. => i think not :)

// Inheritance:
// The hierarchy of elements the same class that extends or adding to another one.
// Refers to the or hierarchy of objects in terms of the features they are influenced by. Think about parents and the inherance to their children and divs classes in web development. Also when we extend a class to from another class we are inheritaing the objects inside of the previous class. 

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
  return arr.map(bool => !bool)
};
console.log(flipBool([true, false, true, true, false, true]))

// 8.
//FEAST OR FAMINE
//  - Write a function that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function shortcut(animal, food){
  let animalShort = animal[0] + animal[animal.length - 1]
  let foodShort = food[0] + food[food.length - 1]
  if (animalShort == foodShort){
    return foodShort
  }
  else{
    return false
  }
}
console.log(shortcut("great blue heron", "garlic naan"))



// Extra Credit

// Now, which of the two interviewees would Google consider for the next round of interviews?
// Why did you pick this person?
// What is Google looking for in this interview from any candidate, and what did Google learn 
// from the candidate that you choose and the other one that you think did not get to the next round? 

// The Google interviewer would consider person 2 since this person went our of their way to explain their 
// thinking and worked collaboratively with the interviwer. Despite, not fully understanding the question, 
// person 1 exibited qualities of a software engineer. He even went as far as to use resources online 
// which goes in hand with what engineers in the industry do on a daily basis. The person is want made 
// recruiters want in their team, someone who can work their way out of a problem, ask questions, 
// being resourceful and excuting in momemts where one is not familar with a particular topic. On the other 
// hand player 1 although successfully completed the whiteboarding exercise did not fully enagage with 
// the interviewer. As a result of the quickness of solving the algoritmn now their is whitespace and time 
// where the recruiter does not get a full picture on how player 1 would work with others in their team. 
// It leaves alot of things in the sky for assumptions and unfortunately does not look great for player 1.
