// re-assign const
// const x = 100;
// x = 200; // ❌ TypeError (cannot reassign const)

// reclare with var
var z = 1;
var z = 2;
console.log(z); // 👉 Output: 2 (var can be redeclared

// reclare with let / const
let m = 1;
// let m = 2; // ❌ SyntaxError (cannot redeclare let/const)
console.log(m);

const n = 1;
// const n = 2; // ❌ SyntaxError (cannot redeclare let/const)
console.log(n);
