/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let tracker = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (tracker[nums[i]] === 1) {
      nums.splice(i, 1);
    } else {
      tracker[nums[i]] = 1;
      count++;
    }
  }
  return nums;
};

// nums = [1, 1, 2];
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
