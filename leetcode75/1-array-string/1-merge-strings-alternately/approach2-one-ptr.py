# https://leetcode.com/problems/merge-strings-alternately

class Solution(object):
    def mergeAlternately(self, word1, word2):
        result = []
        n = max(len(word1), len(word2))
        for i in range(n):
            if i < len(word1):
                result += word1[i]
            if i < len(word2):
                result += word2[i]

        return "".join(result)

if __name__ == "__main__":
    s = Solution()
    print(s.mergeAlternately("abc", "pqr"))  # Output: "apbqcr"
    print(s.mergeAlternately("ab", "pqrs"))  # Output: "apbqrs"
    print(s.mergeAlternately("abcd", "pq"))  # Output: "apbqcd"

'''
Complexity Analysis

Here, m is the length of word1 and n is the length of word2.

    Time complexity: O(m+n)
        We iterate over word1 and word2 once pushing their letters into result. It would take O(m+n) time.

    Space complexity: O(1)
        Without considering the space consumed by the input strings (word1 and word2) and the output string (result), we do not use more than constant space.
'''