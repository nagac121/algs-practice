/**
 * interview date: 28-12-21
 * company: agnos
https://leetcode.com/problems/minimum-window-substring/

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.
Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:
m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.

Follow up: Could you find an algorithm that runs in O(m + n) time?
 */

// Function
// https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/
function Minimum_Window(s, t) {
  let m = new Array(256);
  for (let i = 0; i < 256; i++) {
    m[i] = 0;
  }

  // Length of ans
  let ans = Number.MAX_VALUE;

  // Starting index of ans
  let start = 0;
  let count = 0;

  // Creating map
  for (let i = 0; i < t.length; i++) {
    if (m[t[i].charCodeAt(0)] == 0) count++;

    m[t[i].charCodeAt(0)]++;
  }

  // References of Window
  let i = 0;
  let j = 0;

  // Traversing the window
  while (j < s.length) {
    // Calculations
    m[s[j].charCodeAt(0)]--;

    if (m[s[j].charCodeAt(0)] == 0) count--;

    // Condition matching
    if (count == 0) {
      while (count == 0) {
        // Sorting ans
        if (ans > j - i + 1) {
          ans = Math.min(ans, j - i + 1);
          start = i;
        }

        // Sliding I
        // Calculation for removing I
        m[s[i].charCodeAt(0)]++;

        if (m[s[i].charCodeAt(0)] > 0) count++;

        i++;
      }
    }
    j++;
  }
  if (ans != Number.MAX_VALUE) return s.join("").substring(start, start + ans);
  else return "-1";
}

// Driver code
let s = "ADOBECODEBANC";
let t = "ABC";
console.log(Minimum_Window(s.split(""), t.split("")));

// This code is contributed by rag2127
