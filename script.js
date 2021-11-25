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

let filterSedan = carBrands.filter(sedan => sedan.type === 'sedan'); 
console.log(filterSedan); 

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(str) {
  let backwardsStr = ""
  for (let i = str.length - 1; i >= 0; i-- ) {
   backwardsStr = str[i] + backwardsStr
  }
  return backwardsStr
}

console.log(reverseString('cat')); 


// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

function longestString(arr) {
  initialVal = 0; 
  longString = ""; 
  
  for ( let i =0; i < arr.length; i++) {
      if (arr[i].length > initialVal) {
          initialVal = arr[i].length; 
          longString = arr[i]; 
  
      }
  
  }
  return longString

}
let randomArr = ["Jon", "Wren", "Diamonique"]; 

console.log(longestString(randomArr)); 

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
   let totalWishlist = arr.reduce((prev, curr) => prev + curr.price, 0)
   return totalWishlist
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

//Recursion is a technique or a process in programming where the block of code calls itself until the process is completed. For example, we can see this happen if we consider a program that allows us to count down numbers from a specific input (n). N will take in any number, such as 10 and then will be logged to the console. After being logged to the console, it gets subtracted by 1 and if it meets the if statement condition, the function will be called again with the new number which would be 9. This is a way to see an example of recursion because the printNumbers function will call itself until it reaches the last number in the sequence which will be 1. 

function printNumbers(n) {

  console.log(n); 

  const newNum = n - 1;

  //Once we reach 0 we no longer need to run the function. 
  if (newNum > 0) {
      printNumbers(newNum);

      //Inside of this if statement we are calling the function again using the value determined by newNum. 10 will get subtracted by 1 and become 9 and this will be the new number starting the function printNumbers. 
  }
}



//6. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

//One of the OOP principles that we have learned in this phase is Encapsulation. Encapsulation is the process of restricting access to data and and the functionality that is surrounded around said data. We can see Encapsulation through the class that i've created named Person. Person has a name, an age and a gender with corresponding methods inside of the same class that will log these characteristics that make up person. The getter and setter methods are hiding the actual functionality and are only able to access the information within the methods outside of the Person class rather than within. We are able to control the data that's set and received inside of the Person class by setting it with the setter methods and getting it with the getter methods. 

class Person {
  constructor(name, age, gender) {
    this.name = name; 
    this.age = age;
    this.gender = gender; 
  }
  setName(name) {
    this.name = name; 
  }

  getName() {
    return this.name; 
  }

  setAge(age) {
    this.age = age; 
  }
  getAge() {
   return this.age; 
  }

  setGender(gender) {
    this.gender = gender; 
  }
  getGender() {
    return this.gender; 
  }
}

let newPerson = new Person(); 

newPerson.setName('Bob'); 
newPerson.setAge('22');
newPerson.setGender('Male'); 

// I used these console logs to illustrate that we are able to control the information that we put inside of the encapsulation(methods). 
//console.log(newPerson.getName());
//console.log(newPerson.getAge());
//console.log(newPerson.getGender());



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

  let flipped = arr.map((bool) => {
  
       if (bool == true){
         return bool = false;      
       } 
       else {
         return bool = true; 
       }
      })
      return flipped;
   }; 
  
console.log(flipBool([true, false, true, false]))


//First attempt 
// const flipBool = (arr) => {

//  let newArr = []
//  let flipped =  arr.map((bool) => {
//   //  console.log(bool);
//     if (bool === true) {
//       bool = false; 
//       newArr.push(bool); 
    

//     } else {
//       bool = true; 
//       newArr.push(bool); 
//     }
//   })
// return newArr
// }; 


// 8.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

const feastFamine = (animal, food) => {

    let sliceAnimalF = animal.slice(0, 1);
    let sliceAnimalL = animal.slice(-1);
    
    // console.log(sliceAnimalF); 
    // console.log(sliceAnimalL);

    let sliceFoodF = food.slice(0,1); 
    let sliceFoodL = food.slice(-1);

    if ( sliceAnimalF === sliceFoodF && sliceAnimalL === sliceFoodL) {
      return sliceAnimalF + sliceAnimalL
    } else {
      return false
    }
   
}

console.log(feastFamine("great blue heron", "garlic naan"))
