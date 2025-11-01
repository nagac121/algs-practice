/**
 * difficulty: easy
 * leetcode sol
 * https://leetcode.com/problems/two-sum/
 * https://leetcode.com/problems/two-sum/solution/
 * andrei also suggested to look at it, as part of arrays.
 */

/**
Given an array of integers 'nums' and an integer target, 
return indices of the 'two numbers' such that they add up to target.

You may assume that each input would have exactly one solution, and 
You can return the answer in any order. 
you may not use the same element twice.
 */

function twoSum(num, target) {
  let twoSumIndices = [];
  let map = {};
  for (let i = 0; i < num.length; i++) {
    const complement = target - num[i];
    if (map[complement] !== undefined) { 
      twoSumIndices[0] = map[complement];
      twoSumIndices[1] = i;
      break;
    }
    map[num[i]] = i;
  }
  console.log("1: ", twoSumIndices)
  return twoSumIndices;
}

twoSum([2, 7, 11, 15], 9); // [0,1]
twoSum([3, 2, 4], 6); // [1,2]
twoSum([3, 3], 6); //  [0,1]

/********
 * alg:
 ********
 * itr arr and keep adding the current_num and it's indx.
 * 1st element is added to map{}
 * 2nd ele onwards, check if past nos, added to map are, current number's complement
 * - if yes, then return complements indx and present nos indx as an array.
 * - if no, then add present num to map again
 * repeat this process and finally return indices of two sum.
 * if no complements are found, then return empty arr.
 */

/********************
Complexity Analysis
*********************
Time complexity: O(n). 
We traverse the list containing 'n' elements only once. 
Each look up in the table costs only O(1) time.

Space complexity: O(n). 
The extra space required depends on the number of items stored in the map{}, which stores at most 'n' elements.
 */



/********************
 * undefined check:
 * *******************
 * used "map[complement] !== undefined", 'undefined' check instead of if(map[complement]), 
 * because if num[], has 0 as complement's index, then if() won't execute.
 */

/*******************
 *  leetcode review
 * *****************
 * Runtime: 80 ms, faster than 56.53% of JavaScript online submissions for Two Sum.
Memory Usage: 39.4 MB, less than 13.41% of JavaScript online submissions for Two Sum.
 */