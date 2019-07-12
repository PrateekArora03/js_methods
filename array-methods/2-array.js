var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var index = 0;
var len = 0;
words.forEach((num, i) => {
  if (num.length > len) {
    len = num.length;
    index = i;
  }
});
words[index];

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
var sum = 0;
var sumArray = num => {
  num.forEach(n => {
    sum += n;
  });
  console.log(sum);
};
sumArray(numbers1);
// Use reduce method of array
// Use the above sum and calculate the average.
var sum = 0;
var sumArray = num => {
  num.forEach(n => {
    sum += n;
  });
  console.log(sum / num.length);
};
sumArray(numbers1);

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
var sum = 0;
var averageNumbers = num => {
  num.forEach(n => {
    sum += n;
  });
  console.log(sum / num.length);
};

var words2 = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(str) {
  var len = 0;
  str.forEach(s => {
    len += s.length;
  });
  console.log(`${len / words2.length}`);
}
