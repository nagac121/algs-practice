const letters = ["a", "b", "a", "c", "b", "a"];
const count = letters.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(count); // { a: 3, b: 2, c: 1 }
