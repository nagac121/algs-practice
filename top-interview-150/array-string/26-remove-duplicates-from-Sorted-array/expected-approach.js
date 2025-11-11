/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 * Easy
 * solution: https://www.geeksforgeeks.org/dsa/remove-duplicates-sorted-array/
 */

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
  const n = arr.length;
  if (n <= 1) return n;

  // Start from the second element
  let idx = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[idx++] = arr[i];
    }
  }

  return idx;
}

// Driver code
const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicates(arr);

console.log(arr.slice(0, newSize).join(" "));
/**
 * Expected Approach - O(n) Time and O(1) Space
 */
