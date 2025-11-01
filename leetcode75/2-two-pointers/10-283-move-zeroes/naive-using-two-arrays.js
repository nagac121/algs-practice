/**
 name: move-zeroes
 
 https://www.geeksforgeeks.org/dsa/move-zeroes-end-array/
 https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75
 leetcode 75: 10th
 leetcode no: 283

 * naive approach to move all zeros to end of array
 */
function pushZerosToEnd(arr) {
  const n = arr.length;
  const temp = new Array(n);

  // to keep track of the index in temp[]
  let j = 0;

  // Copy non-zero elements to temp[]
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp[j++] = arr[i];
    }
  }

  // Fill remaining positions in temp[] with zeros
  while (j < n) temp[j++] = 0;

  // Copy all the elements from temp[] to arr[]
  for (let i = 0; i < n; i++) arr[i] = temp[i];
}

// Driver Code
const arr = [1, 2, 0, 4, 3, 0, 5, 0];
pushZerosToEnd(arr);

console.log(arr.join(" ")); // 1 2 4 3 5 0 0 0
/**
 * time space complexity analysis:
 * O(n) Time and O(n) Space
 */
