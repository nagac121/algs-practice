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
