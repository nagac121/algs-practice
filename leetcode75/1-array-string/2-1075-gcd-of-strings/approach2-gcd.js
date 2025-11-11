/**
 * leetcode problem: 1075. Greatest Common Divisor of Strings
 * leetcode 75: 2nd problem in Array and String category
 * Difficulty: Easy
 *
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
 *
 * This function finds the greatest common divisor (GCD) of two strings
 * It checks if the two strings can be formed by repeating a common substring
 */

function gcdOfStrings(str1, str2) {
  // If concatenations differ, no common base string
  if (str1 + str2 !== str2 + str1) return "";

  // Compute GCD of lengths
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const maxLength = gcd(str1.length, str2.length); // eg. gcd(6, 3)

  // Return the prefix of that length
  return str1.slice(0, maxLength);
}

console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""
