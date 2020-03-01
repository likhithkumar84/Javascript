const fruits = [
  "banana",
  "apple",
  "apricot",
  "blueberry",
  "cherry",
  "orange",
  "grape",
  "plum",
  "jack fruit",
  "kiwi"
];

const result = fruits.reduce((total, fruit) => {
  fruit.split("").forEach(letter => {
    total[letter] = (total[letter] || 0) + 1;
  });
  return total;
}, {});

console.log(result);


//example

