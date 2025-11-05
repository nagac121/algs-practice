function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const fn = outer();
console.log(fn()); // 1
console.log(fn()); // 2

function outer2() {
  let count = 0;
  function inner2() {
    count++;
    return count;
  }
  return inner2; // <- return the function
}

const fn2 = outer2(); // fn2 now points to inner2()
console.log(fn2()); // 1
console.log(fn2()); // 2
