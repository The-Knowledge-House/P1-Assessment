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

// i'm assuming we supposed to filter out entire objects
// that are sedans, and not have sedan printed twice.


let sedanTypes = carBrands.filter(function (sdns) {return sdns.type == "sedan";}
);

console.log(sedanTypes); // prints 2nd and 4th objects


/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
*/


function reverseString(aString) {
  let pHolder = "";
  for (let p = aString.length - 1; p >= 0; p--) {	// beginning loops are last index,
																									// and iterating backwards until 0 is reached.
    pHolder += aString[p];	// beginning with the last character, indexes are push into a new string.
  }
  return pHolder;
}

console.log(reverseString("the mitochondria is the power house of the cell")) 


// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array


var arrayOfStrings = [
  'first item',
  'second item is longer than the third one',
  'third longish item'
];

let mrLongString = 0;
let longString;

for (let p = 0; p < arrayOfStrings.length; p++) {	// standard looping.
  if (arrayOfStrings[p].length > mrLongString) {	// if any string exists, go inside.
    mrLongString = arrayOfStrings[p].length;	// save element to variable, but 
																							// is replaced during loop if not the largest.
    longString = arrayOfStrings[p]; // save results to new variable, as p 
                                    // isn't recognized outside of the loop.
  } //endIF
} // endFOR

console.log(longString);


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

function leCOST (anARRAY) {
  return anARRAY.reduce((addedTotal, element) => {
    										return addedTotal + element.price;
  											}, 0)
} // endFUNC
console.log(leCOST(wishlist));


// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.


let whatIsRecursion = `'Recursion' is a programming technique that describes
                        when a function calls itself (normally within itself).`

// example:
function factorial(x) {
  if (x < 0) return;            // the fail-safe; anti-negative number.
  if (x === 0) return 1;        // covering the base case.
  return x * factorial(x - 1);  // where the calling of itself happens; but including
                                // a parameter 1 less than the parent function.
}
factorial(3);
// prints >> 6


//6. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.


let comfortablePillar = `"Inheritence"
                          allows one to create a class-object which inherits/get
                          method or properties from another (usually, parent) class.
                          This makes said class-object a 'child' of the class it gains
                          said properties and methods from. 
                          
                          All essentially, to reduce code.`

let forExample = `I could create a class-object for myself which includes
                  my name, DOB, and favorite color, and subsequently create
                  another class that includes my favorite video games.
                  
                  when programmed properly, i could inherit the initial class' properties,
                  and use/include it in my video game class, to 'paint a full picture'.`

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


const flipBool = (arr) => {       // an arrow function of course.
  return arr.map((elamint) => {   // taking the array, mapping it, and
                                  // making it so each element
    return !elamint               // is reversed by using '!'
  })
};


// 8.
//FEAST OR FAMINE
//  - Write a function* that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`


function matchingEnds (animal, food) {
  if (animal[0] == food[0] && animal[-1] == food[-1]) {
    return `${animal[0]}${animal[-1]} `
  } else {
    return `${animal} and ${food} don't match in this instance.`
  }
}

console.log(matchingEnds("panda", "pizza"))		// prints>> pundefined
console.log(matchingEnds("tiger", "tasagna"))	// prints>> tundefined
console.log(matchingEnds("tiger", "lasagna"))	// prints>> tiger and lasagna don't match in this instance.


// running into undefined issues.
// the followinf prints the same:

function matchingEnds (animal, food) {
	let animalFirstIndex = animal[0];
	let foodFirstIndex = food[0];
	let animalLast = animal[-1];
	let foodLast = food[-1];

  if (animalLast == foodLast && foodFirstIndex == animalFirstIndex) {
    return `${animalFirstIndex}${foodLast} `
  } else {
    return `${animal} and ${food} don't match in this instance.`
  }
}

//    :(


/*

Extra Credit

For this you have to write a through explanation explaining the interview process below
Interview Scenario:
Two people, Person1 and Person2 are interviewing at Google.

Now they are both given the same interview questions by the same interviewers, 

Imagine they are given certain algorithmic whiteboarding questions that generally difficult. 

Person1 happens to know the answer to it and from their head they are able to solve the algorithm, and even explain it to the interviewers.

Person2 does not know the answer off the top of their head, but knows certain elements of how to solve this interview question. 
For example Person2 knows how to find resources, a great debugger. To which in the interview Person2, asks the interviewers if they can google some resources (not the answer directly).

Person2 took more time to explain their answer but also explained the process of how they solved this problem.

Person1 knew the answer and took less time to answer the question. 


Now, which of the two interviewees would Google consider for the next round of interviews?
Why did you pick this person?
What is Google looking for in this interview from any candidate, and what did Google learn from the candidate that you choose and the other one that you think did not get to the next round? 

Give a thorough answer.

*/

let opinionatedAnswer = `I believe Google would choose to move forward with Person-2.
                         Though time-to-complete is important, it's more important to
                         actually understand the steps necessary to solve an issue. For
                         all Google knows, Person-1 could have had memorized the solution;
                         which is fine in theory, but look ahead to future projects, there's
                         an increased chance of failure. Or rather, the time saved during
                         the whiteboard demonstration will likely be made up for when attempting
                         to fully understand and explain future concepts.
                         
                         Essentially Google has little insight to whether or not Person-1 actually
                         understands, and can explain; versus Person-2 who can at best, be counted on
                         for executing problems similar to the one worked out in the interview.
                         Which in the long run, is not ideal.`