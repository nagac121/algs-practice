function mergeAlternately(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  let i = 0;
  let j = 0;
  const result = []; // Initialize an empty array to store the merged characters

  while (i < m || j < n) {
    if (i < m) {
      result.push(word1[i]);
      i += 1;
    }
    if (j < n) {
      result.push(word2[j]);
      j += 1;
    }
  }

  return result.join(""); // Join the array into a string and return
}

console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Output: "apbqcd"

/**
 * 🧮 Time Complexity
You loop through both strings once (while (i < m || j < n)).
Inside the loop, each character from word1 and word2 is visited exactly once.
Each push() operation is O(1).
Joining the array using .join("") takes O(m + n) time to build the final string.
✅ Total Time Complexity: O(m + n)

🧠 Space Complexity
You’re building an array result that holds all characters from both strings → O(m + n).
Apart from that, you only use a few integer variables (i, j, m, n) → O(1) extra.
So, depending on how you count the output:
If you include the output string: → O(m + n)
If you exclude output (as per algorithmic convention): → O(1)
✅ Space Complexity: O(1) (auxiliary) or O(m + n) (total)
 */
