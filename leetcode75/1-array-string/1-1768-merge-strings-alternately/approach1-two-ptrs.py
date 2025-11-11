# https://leetcode.com/problems/merge-strings-alternately/
# Recommended Approach: Two Pointers

class Solution(object):
    def mergeAlternately(self, word1, word2):
        m = len(word1)
        n = len(word2)
        i = 0
        j = 0
        result = [] # Initialize an empty list to store the merged characters

        while i < m or j < n:
            if i < m:
                result += word1[i]
                i += 1
            if j < n:
                result += word2[j]
                j += 1

        return "".join(result) # Join the list into a string and return


if __name__ == "__main__":
    s = Solution()
    print(s.mergeAlternately("abc", "pqr"))  # Output: "apbqcr"
    print(s.mergeAlternately("ab", "pqrs"))  # Output: "apbqrs"
    print(s.mergeAlternately("abcd", "pq"))  # Output: "apbqcd"

"""
    Time complexity: O(m+n)
        We iterate over word1 and word2 once and push their letters into result. It would take O(m+n) time.

    Space complexity: O(1) or O(m+n)
        Without considering the space consumed by the input strings (word1 and word2) and the output string (result), we do not use more than constant space.
"""