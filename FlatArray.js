//Flattening Array
const age = [1,2,[3,4,5,[6,7,8,[9,10]]]];
const flat = array => array.reduce((total, cv) => total.concat(Array.isArray(cv) ? flat(cv) : cv), []);

//Shifting Element
const grid = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

let left = (grid, player = 1) => {
  grid.map(cv => cv.push(cv.shift()));
  return grid;
};

let right = () => {
  grid.map(val => val.unshift(val.pop()));
  return grid
};

let top = () => {
  grid.push(grid.shift());
  return grid
};

let down = () => {
  grid.unshift(grid.pop());
  return grid
};
