/**
 * https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * also known as: find maximum sum
 * dt: 14-1-22
 * interview: cialfo
 * editorial is locked, so gpt solution
 */

/**
 *
 * 53. Maximum Subarray
 * medium
 *
 * 
 * Given an integer array nums, find the
with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

// Recommended: Kadane's Algorithm
// Time O(n) Space O(1)
function maxSubarraySum(arr) {
  // Stores the result (maximum sum found so far)
  let res = arr[0];

  // Maximum sum of subarray ending at current position
  let maxEnding = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Either extend the previous subarray or start
    // new from current element
    maxEnding = Math.max(maxEnding + arr[i], arr[i]);

    // Update result if the new subarray sum is larger
    res = Math.max(res, maxEnding);
  }
  return res;
}

// g4g test cases
const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));

// leetcode test cases
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubarraySum([1])); // 1
console.log(maxSubarraySum([5, 4, -1, 7, 8])); // 23

/**
 * Follow-up (Divide & Conquer, O(n log n))
 * This is more academic — less efficient, but conceptually important
 */
function maxSubArrayDivide(nums) {
  function helper(left, right) {
    if (left === right) return nums[left];

    const mid = Math.floor((left + right) / 2);
    const leftMax = helper(left, mid);
    const rightMax = helper(mid + 1, right);

    // Find max crossing sum
    let leftSum = -Infinity,
      rightSum = -Infinity;
    let sum = 0;

    for (let i = mid; i >= left; i--) {
      sum += nums[i];
      leftSum = Math.max(leftSum, sum);
    }

    sum = 0;
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i];
      rightSum = Math.max(rightSum, sum);
    }

    return Math.max(leftMax, rightMax, leftSum + rightSum);
  }

  return helper(0, nums.length - 1);
}

// Example
console.log(maxSubArrayDivide([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
/**
 * Recommended for interviews:
 * Use the Kadane’s Algorithm (first one).
 * Mention that the Divide & Conquer version exists as a follow-up (O(n log n)).
 */
