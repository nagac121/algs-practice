/**
 * https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
 * 1768. Merge Strings Alternately
 * leetcode75
 * easy
 * JS version of Approach 2 (Python → JS conversion by GitHub Copilot)
 */
class Solution {
  mergeAlternately(word1, word2) {
    const result = [];
    const n = Math.max(word1.length, word2.length);
    for (let i = 0; i < n; i++) {
      if (i < word1.length) {
        result.push(word1[i]);
      }
      if (i < word2.length) {
        result.push(word2[i]);
      }
    }
    return result.join("");
  }
}

const s = new Solution();
console.log(s.mergeAlternately("abc", "pqr")); // Output: "apbqcr"
console.log(s.mergeAlternately("ab", "pqrs")); // Output: "apbqrs"
console.log(s.mergeAlternately("abcd", "pq")); // Output: "apbqcd"

/**
🧮 Time Complexity
•	You run a single for loop that goes up to n = max(len(word1), len(word2)).
•	Inside each iteration:
o	You perform at most two constant-time operations (push() twice, each O(1)).
So the total work done is proportional to m + n — because:
•	You push each character from both words once overall.
✅ Time Complexity: O(m + n)
________________________________________
🧠 Space Complexity
•	You build result, which stores all characters of both strings before joining → O(m + n).
•	Other variables (i, n, etc.) take constant space.
So:
•	If you ignore the output string (LeetCode convention): O(1) auxiliary space.
•	If you count the final merged string: O(m + n) total space.
✅ Space Complexity: O(1) (auxiliary) or O(m + n) (total).
 */
