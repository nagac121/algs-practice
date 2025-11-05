// 1. Hoisting
console.log(x);
var x = 10;
// 👉 Output: undefined (because var is hoisted, but value assigned later).

// 2. let / const Temporal Dead Zone
// console.log(y);
let y = 20;
// 👉 Output: ReferenceError (not accessible before initialization).
