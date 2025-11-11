// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// Easy
/**
 * Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */
function removeDuplicates(arr) {
  // To track seen elements
  const s = new Set();

  // To maintain the new size of the array
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!s.has(arr[i])) {
      s.add(arr[i]);
      arr[idx++] = arr[i];
    }
  }

  // Return the size of the array
  // with unique elements
  return idx;
}

// Driver code
// const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5]; // gfg test case
const arr = [1, 1, 2]; // [1,2,_ ] // leetcode test case
// const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // [0,1,2,3,4,_,_,_,_,_] // leetcode test case
const newSize = removeDuplicates(arr);

console.log(arr.slice(0, newSize).join(" ")); // Output: 1 2 3 4 5 - gfg test case
