/** 
 * 50. Pow(x, n)
 * https://leetcode.com/problems/powx-n/description/
 * Interview: zerolight
 * dt: 18-10-21
 * 
 * Write an implementation of the pow(x,y) function, such that it returns the value of x to the pow of y. Do so using recursion.
Note: Assume y >= 0.
 */

// javascript program for the above approach
function power(x, y) {
  // If x^0 return 1
  if (y == 0) return 1;

  // If we need to find of 0^y
  if (x == 0) return 0;

  // For all other cases
  console.log("x: ", x, ": ", power(x, y - 1), ": ", x * power(x, y - 1));
  return x * power(x, y - 1);
}

console.log(power(2, 2));
// console.log(power(2, 3));
// console.log(power(4, 3));
/**
 * https://stackoverflow.com/questions/38666303/javascript-implementation-of-math-pow
 *
 * https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/
 * follow gfg
 */
