function gcdOfStrings(str1, str2) {
  // Compute string lengths
  const len1 = str1.length;
  const len2 = str2.length;

  // Helper function to check if a prefix of length k works
  function valid(k) {
    // where k is the length of the prefix
    // If k doesn't divide both lengths, it's invalid
    if (len1 % k !== 0 || len2 % k !== 0) return false;

    const n1 = len1 / k; // Number of times prefix should repeat in str1
    const n2 = len2 / k; // Number of times prefix should repeat in str2
    const base = str1.slice(0, k); // prefix of length k
    // we can take either str1 or str2 since both should have same prefix of length k i.e base for eg "ABCABCABC" and "ABCABC" both have prefix "ABC"

    // Check if repeating base reconstructs both strings
    return str1 === base.repeat(n1) && str2 === base.repeat(n2); // O(m+n)
  }

  // Iterate from longest possible prefix down to 1
  for (let i = Math.min(len1, len2); i > 0; i--) {
    // O(min(m,n))
    if (valid(i)) return str1.slice(0, i);
  }

  // No common divisor string found
  return "";
}
console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""

/**
 * Complexity Analysis

Let m,n be the lengths of the two input strings str1 and str2.

    Time complexity: O(min(m,n)⋅(m+n))
    We checked every prefix string base of the shorter string among str1 and str2, and verify if both strings are made by multiples of base. There are up to min(m,n) prefix strings to verify and each check involves iterating over the two input strings to check if the current base is the GCD string, which costs O(m+n). Therefore, the overall time complexity is O(min(m,n)⋅(m+n)).

    Space complexity: O(min(m,n))
    We need to keep a copy of base in each iteration, which takes O(min(m,n)) space.
 */
