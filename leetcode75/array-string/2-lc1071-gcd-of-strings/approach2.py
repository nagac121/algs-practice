# ✅ Approach 2: Elegant + Math-based (using GCD of lengths)
# This code is part of a solution to LeetCode problem 1071: GCD of Strings.
# The solution uses the mathematical property of the GCD of lengths of the two strings
# Uses math.gcd + string concatenation property
# difficulty = "Easy"

from math import gcd

class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        # Check if they have non-zero GCD string.
        if str1 + str2 != str2 + str1:
            return ""

        # Get the GCD of the two lengths.
        max_length = gcd(len(str1), len(str2))
        return str1[:max_length]

if __name__ == "__main__":
    s = Solution()
    print(s.gcdOfStrings("ABCABC", "ABC"))   # Output: "ABC"
    print(s.gcdOfStrings("ABABAB", "ABAB"))  # Output: "AB"
    print(s.gcdOfStrings("LEET", "CODE"))    # Output: ""