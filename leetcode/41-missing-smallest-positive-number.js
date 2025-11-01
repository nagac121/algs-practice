/**
 * interviews: codility
 * https://leetcode.com/problems/first-missing-positive/description/
 * 41. First Missing Positive
 * 
 * Write a function:
function solution(A);
that, given an array A of N integers, returns the smallest positive integer 
(greater than 0) that does not occur in A.

For example, 
given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:
 N is an integer within the range [1..100,000];
 each element of array A is an integer within the range [−1,000,000..1,000,000].
you can write to stdout for debugging purposes, e.g.
console.log('this is a debug message');
 */

function solution(input) {
  let flag = false;
  if (input.length === 1) {
    return input[0];
  }
  // write your code in JavaScript (Node.js 8.9.4)
  // let nRange = [1,100000];
  // let arrRange =[-1000000,1000000];

  // remove duplicate nos
  let unique = [...new Set(input)];
  // sort input array
  let sortedIp = unique.sort(function (a, b) {
    return a - b;
  });
  var res = null;
  // "return","break","continue" doesn't work in forEach
  sortedIp.forEach((item, index) => {
    if (item >= 0) {
      // if atleast one positive number, then identify with 'flag'
      flag = true;
      if (index > 0) {
        // if current item is not an immediate number to it, then update 'res' with missing number
        if (item !== sortedIp[index - 1] + 1) {
          res = item - 1;
        }
      }
      if (index === sortedIp.length - 1) {
        // if iteration is at last index, that means iteration is done without missing anything, hence return 'next number'
        if (!res) {
          res = sorteIp[index] + 1;
        }
      }
    }
  });

  if (!flag) {
    // return 1 if no positive number
    res = 1;
  }
  console.log("res: ", res);
}

let input = [1, 3, 6, 4, 1, 2];
solution(input);
