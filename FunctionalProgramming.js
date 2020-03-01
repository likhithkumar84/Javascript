//map()
//example1
let numbers = [1, 4, 9];
let roots = numbers.map(
  num => ` the squareroot of ${num} is ${Math.sqrt(num)} `
);
console.log(roots);
//example2
let kv = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];
let reformattedArray = kv.map(obj => {
  return { [obj.key]: obj.value };
});
console.log(reformattedArray);
//example3
let xs = ["10", "20", "30"];
xs = xs.map(Number);
console.log(xs);

//foreach()
//example1
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
nums.forEach(num => (sum += num));
console.log(sum);

//filter()
//example1
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];
const result = words.filter(word => word.length > 6);
const result2 = words.filter(word => word.startsWith("e"));
console.log(result);
console.log(result2);
//example2
var users = [
  {
    name: "John",
    email: "johnson@mail.com",
    age: 21,
    address: "USA"
  },
  {
    name: "Tom",
    email: "tom@mail.com",
    age: 22,
    address: "England"
  },
  {
    name: "Mark",
    email: "mark@mail.com",
    age: 23,
    address: "England"
  }
];
let res = users
  .filter(obj => obj.name === "Tom")
  .map(obj2 => `${obj2.name}'s age is ${obj2.age}`);
let res1 = users.filter(obj3 => obj3.name.match(/m/gi));
console.log(res);
console.log(res1);

//some()
//example1
let age = [23, 22, 52, 15, 19, 26, 28, 25, 27, 30];
let ageres = age.some(num => num > 20);
console.log(ageres);

//reduce()
//example1: average of numbers
var numbs = [20, 30, 40, 50, 60];

var average = numbs.reduce((total, currentvalue, index, arr) => {
  total += currentvalue / arr.length;
  return total;
}, 0);
console.log(average);

//example2:
var data = [
  { a: "happy", b: "robin", c: ["blue", "green"] },
  { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
  { a: "sad", b: "goldfish", c: ["green", "red"] }
];

var colors = data
  .map(obj => obj.c)
  .reduce((total, cv) => total.concat(cv), [])
  .reduce((tally, color) => {
    tally[color] = (tally[color] || 0) + 1;
    return tally;
  }, {});
console.log(colors);


