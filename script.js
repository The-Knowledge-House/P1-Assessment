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

let filterSedans = carBrands.filter((car) => car.type === "sedan");
console.log(filterSedans); 

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(){
  for(var reversedStr = '', i = str.length - 1; i >= 0; i--){
    reversedStr = reversedStr + str[i];
  }
  return reversedStr;
}
reverseString('cat'); // => 'tac'

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array forEach way to do it.
function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}

console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa'])) 


// let longestString = (arr) => {
//   let longest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longest) {
//       longest = arr[i].length;
//     } for loop way to do it.
//   }
//   return longest;
// };

// forEach way to do it.
// let forEachLongest = (arr) => { 
//   let longest = 0;
//   arr.forEach((str) => {
//     str.length > longest  ? longest = str.length : longest += ;
//   }); 
//   return longest;
// };
//   console.log(forEachLongest(['cat', 'dog', 'bird']));  

//   console.log(longestString(["hello", "my", "name", "is", "bob"]));     
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
function shop(arr) {}
console.log(shop(wishlist));

let total = wishlist.reduce((acc, curr) => { return acc + curr.price; }, 0); 

console.log(total);  // 227005
// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

// recursion is special loop that has a base case to describe how the loop ends and 
// call it own function  to iterate through the data untill it fuffils the loop conditions.  eample below.
// function recursion(arr) {
//   if (conditions) {
//   // base case
//   }
//    recursion(arr) // call own function to iterate through the data untill it fuffils the loop 
// }
// recursion(); 

//6. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

// Encapsulation:
// The difference between classes
// Encapsulation is the process of combining data and a member function (Method) into a single entity,
// referred to as a class. An example of this when you make methods in the construct.

//Data, Methods, all information within the object


// Abstraction:
// focusing on the more important parts of an object and not emphasis on unnessary details. 
//Think about making a coffee with a coffee machine.

// Abstraction is the process of exposing only the most important aspects of an entity/object 
//to the outside world while hiding the rest. like nextflex landing page, they dont show all of th site only portion at a time.

// Inheritance:

// The hierarchy of the same class that extends or adding to it
// Refers to the or hierarchy of objects in terms of the features they are influenced by. 
//Think about parents and the inherance to their children and divs in web dev. 
// THE Rich parents   give inheritance money to there  children.

// Polymorphism:
// more than one change!!! So, when  there any events or method that change the object it showcase 
// the polymorphism.

// Change the same object over and over again

// Performs different things as per the object's class, which calls it. In order words it refers to calling object soley one at a time and only when it's called meaning it does not apply to all object of the same class.



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
const flipBool = (arr) => { arr.map(flipBool); return !!arr; };

console.log(flipBool([true, false]));  // => [false, true]

// 8.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food,
// which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
let twoLetterFood = animal.substr(0,2).toLowerCase() || false;
let twoLetterAnimal = food.substr(0,2).toLowerCase() || false;


let firstLastLetter = (animal, food) => {
  if (twoLetterFood === twoLetterAnimal && animal[animal.length - 1] === food[food.length - 1]) {
    return animal[0] + animal[animal.length - 1];
  } else {
    return false;
  }
}

console.log(firstLastLetter("great blue heron", "garlic naan"));   // => "gn"

// Extra Credit

//9.
// For this you have to write a through explanation explaining the interview process below
// Interview Scenario:
// Two people, Person1 and Person2 are interviewing at Google.

// Now they are both given the same interview questions by the same interviewers, 

// Imagine they are given certain algorithmic whiteboarding questions that generally difficult. 

// Person1 happens to know the answer to it and from their head they are able to solve the algorithm, and even explain it to the interviewers.

// Person2 does not know the answer off the top of their head, but knows certain elements of how to solve this interview question. 
// For example Person2 knows how to find resources, a great debugger. To which in the interview Person2, asks the interviewers if they can google some resources (not the answer directly).

// Person2 took more time to explain their answer but also explained the process of how they solved this problem.

// Person1 knew the answer and took less time to answer the question. 


// Now, which of the two interviewees would Google consider for the next round of interviews?
// Why did you pick this person?
// What is Google looking for in this interview from any candidate, and what did Google learn from the candidate that you choose and the other one that you think did not get to the next round? 

// Give a thorough answer.

//Despite the fact that Person1 knows the answer and takes less time to respond to the question. Person2 is the best choice since 
//he understands how to tackle the problem correctly. That is the actual test of a candidate's ability to navigate through challenges they have never encountered before.
// When they need to recruit a developer, they need somebody who can comprehend the problem and envision how they would solve it.
// The structure approach to how a candidate can take the ambiguities of the problem and the stress is another component of the interview. 
//It's an excellent indicator of a candidate's capacity to adjust to the stress of the job when there are things he doesn't understand and how he can solve the problem. 
//Finally, the applicant / must, like Person2, break down the problem into smaller pieces. So, whether there is new technology or challenges that develop in the workplace, the interviewers can see if the individual can handle the challenge based on 
// the experience the interviewers witnessed dealing with the problem and the stress of the situation.



// Even though Person1 does  know the answer and takes less time to answer the question. Person2 is the best candidate because 
// he knows the right process on how to solve the problem. Thats the true test of the abilty of the candidate to navigate through problems they never done before.
// when they have to  hire a developer they need people who can be able to understand the problem and see how they will approach the problem. 
// Another aspect of the interview is the structure approach on how a candidate can take the abiguities of the problem and the stress. It give a good indicator 
// of the candidate's ability to adapt to the stress of the job when there things he/she doesn't know and how he can go about solving the problem. In the end the candidate
// needs to break down the problem into smaller pieces like what Person2 did.  So wheather there is new technology or problems that arise in the company they can see base the person on 
// the experience the interviewers saw dealing with the problem and the stress of the problem he can face the challenge.





