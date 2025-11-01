/***************************************************
 * 343. Integer Break
 * difficulty: medium
 * https://leetcode.com/problems/integer-break/
 * companies: hedge fund
 * *************************************************
 Given an integer n, break it into the 
 1. 'sum' of k positive integers, where k >= 2, and 
 2. 'maximize' the product of 'those' integers.
 3. Return the 'maximum' product you can get.

Example 1:
Input: n = 2
Output: 1
Explanation: 
2 = 1 + 1, 
1 × 1 = 1.

Example 2:
Input: n = 10
Output: 36
Explanation: 
10 = 3 + 3 + 4, 
3 × 3 × 4 = 36.

Constraints:
2 <= n <= 58
******************************************************/
// SOLUTION 1: NOT WORKING
// converted python sol to js. find another sol
var integerBreak = function (n) {
    // TO DEBUG NAN ERROR
    let dp = [n];
    dp.fill(0); // fill dp arr with 0s
    dp[1] = 1;
    for (let i = 1; i <= n + 1; i++) {
        for (let j = 1; j <= i; j++) {
            a = (i - j) * j;
            b = dp[i - j] * j;
            c = dp[i];
            dp[i] = Math.max(a, b, c);
        }
    }
    return dp[n];
};
console.log(integerBreak(2))