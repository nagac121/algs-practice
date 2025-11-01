/*
https://www.w3schools.com/dsa/dsa_algo_simple.php
solution: fibonacci using for loop
*/
let prev2 = 0;
let prev1 = 1;

console.log(prev2);
console.log(prev1);
for (let i = 0; i < 18; i++) {
  const newFibo = prev1 + prev2;
  console.log(newFibo);
  prev2 = prev1;
  prev1 = newFibo;
}

/*
output:
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
*/
