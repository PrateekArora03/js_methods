var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
// your code goes here
// Solution is 105
var age = 0;
var dogAge = obj => {
  obj.forEach(i => {
    if (i.type == "dog") age += i.age;
  });
  age *= 7;
  console.log(age);
};

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.
// Solution 105
function dogAge(obj) {
  var dogType = obj.filter(n => n.type == "dog");
  var dogAge = dogType.map(n => (n.age *= 7));
  var totalAge = dogAge.reduce((x, y) => x + y);
  totalAge *= 7;
}
