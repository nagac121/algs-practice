/**
 * https://leetcode.com/problems/binary-search/description/
 * https://www.interviewbit.com/javascript-interview-questions/#write-a-function-that-performs-binary-search-on-a-sorted-array
 * 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 */
// this is interview bit solution, in leetcode you don't need to pass startPos and endPos
function binarySearch(arr, value, startPos, endPos) {
  if (startPos > endPos) return -1;

  let middleIndex = Math.floor(startPos + endPos) / 2;

  if (arr[middleIndex] === value) return middleIndex;
  else if (arr[middleIndex] > value) {
    return binarySearch(arr, value, startPos, middleIndex - 1);
  } else {
    return binarySearch(arr, value, middleIndex + 1, endPos);
  }
}

binarySearch([-1, 0, 3, 5, 9, 12], 9, 0, 5); // Returns 4
binarySearch([-1, 0, 3, 5, 9, 12], 2, 0, 5); // Returns -1
