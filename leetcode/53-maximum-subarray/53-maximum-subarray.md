# maximum subarray

⚙️ Explanation

Kadane’s algorithm works by dynamically tracking:

currentSum → maximum sum ending at current index

maxSum → overall maximum found so far

For each number:

Either start fresh from current number
(nums[i])

Or extend the previous subarray (currentSum + nums[i])

You always keep the higher one.
