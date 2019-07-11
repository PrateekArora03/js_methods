// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
Math.max(...numbers);

// Find longest string in strings
let largestNo = "";
let length = 0;
strings.forEach(num => {
  if (length < num.length) {
    largestNo = num;
    length = num.length;
  }
});
console.log(largestNo);

// Find all the even numbers
var evenNO = numbers.filter(num => num % 2 == 0);
console.log(evenNO);

// Find all the odd numbers
var oddNO = numbers.filter(num => num % 2 != 0);
console.log(oddNO);

// Find all the words that contain 'is' use string method 'includes'
var storeIs = strings.filter(num => num.includes("is"));
console.log(storeIs);

// Find all the words that contain 'is' use string method 'indexOf'
// console.log(strings.indexOf('is'));
let iscontain = [];
strings.forEach(num => {
  if (num.indexOf("is") >= 0) iscontain.push(num); //1 is word in the string 0 if find same element -1 word not found in string
});

// Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(num => num % 3 == 0);

//  Sort Array from smallest to largest
strings.sort(); // string sort

numbers.sort(function(a, b) {
  return a - b;
});

// Remove the last word in strings
strings.pop();
// Add a new word in the array
strings.push("hello");

// Remove the first word in the array
strings.shift();

// Place a new word at the start of the array use (upshift)
strings.unshift("px");

// Make a subset of numbers array [18,9,7,11]
numbers.slice(3, 7);

// Make a subset of strings array ['a','collection']
strings.slice(2, 4);

// Replace 12 & 18 with 1221 and 1881
numbers.forEach((num, i) => {
  if (num == 12) num = num.toString().replace("12", 1221);
  if (num == 18) num = num.toString().replace("18", 1881);
  numbers[i] = Number(num);
});

// Replace words with string in strings array

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var customersJ = [];
customers.forEach(obj => {
  if (obj.firstname.startsWith("J")) customersJ.push(obj.firstname);
});
// Create new array with firstname and lastname
var fullName = [];
customers.forEach(obj => {
  fullName.push(obj.firstname + " " + obj.lastname);
});

// Sort the array created above alphabetically
fullName.sort();
