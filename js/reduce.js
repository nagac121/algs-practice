// Example 1: Sum of all numbers in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 15

// Example 2: Flattening an array of arrays
const arrays = [[1, 2], [3, 4], [5]];
const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // [1, 2, 3, 4, 5]

// Example 3: Counting occurrences of values in an array
const letters = ["a", "b", "a", "c", "b", "a"];
const count = letters.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(count); // { a: 3, b: 2, c: 1 }
