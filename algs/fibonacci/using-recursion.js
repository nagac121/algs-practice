// https://www.w3schools.com/dsa/dsa_algo_simple.php
// solution: fibonacci using recursion

console.log(0);
console.log(1);

let count = 2;

function fibonacci(prev1, prev2) {
  if (count <= 19) {
    let newFibo = prev1 + prev2;
    console.log(newFibo);
    prev2 = prev1;
    prev1 = newFibo;
    count += 1;
    fibonacci(prev1, prev2);
  } else {
    return;
  }
}

fibonacci(1, 0);

// Output:
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144
// 233
// 377
// 610
// 987
// 1597
// 2584
// 4181
