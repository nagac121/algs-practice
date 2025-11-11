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
