console.log("Part 1 :");
const greet = (name) => {
  return `Hello ${name}`;
};
console.log(greet("Ziya"));
console.log(greet("Ziya", "Ali"));

console.log("-----------------------");
console.log("Part 2 :");

const factotial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factotial(n - 1);
  }
};

let num = 9;
if (num > 0) {
  let result = factotial(num);
  console.log(`${num}! is equal to ${result}`);
}
console.log("-----------------------");
console.log("Part 3 :");

let sumRest = 0;
const sumAll = (...rest) => {
  for (let i = 0; i < rest.length; i++) {
    sumRest = sumRest + rest[i];
  }
  console.log(sumRest);
};
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("-----------------------");
console.log("Part 4:");

const first = () => {
  console.log("This is my first arrow function");
};
const second = () => {
  console.log("This is my second arrow function");
};
const third = () => {
  first();
  second();
  console.log("This is my third arrow function");
};
third();

console.log("-----------------------");
console.log("Part 5:");
let sum = 0;
const sumNum = (others) => {
  for (let i = 0; i < others.length; i++) {
    sum = sum + others[i];
  }
  return sum;
};
let arr = [1, 2, 3, 34, 4, 56];
sumNum(arr);

const sumMult = () => {
  return (mult = sum * 8);
};
console.log(sumMult());
console.log("s");
