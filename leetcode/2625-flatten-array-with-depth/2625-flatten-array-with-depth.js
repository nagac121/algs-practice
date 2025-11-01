// Flattens an array up to a specified depth
function flattenWithDepth(arr, n) {
  if (n === 0) return arr.slice(); // return as is
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenWithDepth(arr[i], n - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example 1:
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 0;
console.log(flattenWithDepth(arr, n));

// Example 2
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 1;
console.log(flattenWithDepth(arr, n)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// Example 3:
arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
n = 2;
console.log(flattenWithDepth(arr, n)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
