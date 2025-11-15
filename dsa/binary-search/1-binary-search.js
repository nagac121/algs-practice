function binarySearch(nums, target) {
  // :type nums: Array<number>
  // :type target: number
  // :rtype: number
  if (!Array.isArray(nums) || nums.length === 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // End Condition: left > right
  return -1;
}

export default binarySearch;
