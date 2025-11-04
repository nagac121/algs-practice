# ✅ Approach 1: Brute-force with validation
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        len1, len2 = len(str1), len(str2)

        # valid function checks if a string of length k can be the GCD of both strings
        def valid(k):  # k: minimum length of the two strings
            if len1 % k or len2 % k:  # if k does not divide both lengths evenly
                return False
            n1, n2 = (
                len1 // k,
                len2 // k,
            )  # number of times the base string should repeat
            base = str1[:k]  # base string of length k
            # check if both strings can be formed by repeating the base string
            return str1 == n1 * base and str2 == n2 * base

        for i in range(min(len1, len2), 0, -1):
            if valid(i):
                return str1[:i]
        return ""


if __name__ == "__main__":
    s = Solution()
    print(s.gcdOfStrings("ABCABC", "ABC"))  # Output: "ABC"
    print(s.gcdOfStrings("ABABAB", "ABAB"))  # Output: "AB"
    print(s.gcdOfStrings("LEET", "CODE"))  # Output: ""


# Complexity Analysis
# Let m,n be the lengths of the two input strings str1 and str2.

# Time complexity: O(min(m,n)*(m+n))
# We checked every prefix string base of the shorter string among str1 and str2, and verify if both strings are made by multiples of base.
# There are up to min(m,n) prefix strings to verify and each check involves iterating over the two input strings to check if the current base is the GCD string, which costs O(m+n).
# Therefore, the overall time complexity is O(min(m,n)*(m+n)).

# Space complexity: O(min(m,n))
# We need to keep a copy of base in each iteration, which takes O(min(m,n)) space.

# Checks every possible prefix from longest to shortest
# Validates by checking if the prefix repeats correctly eg. ABCABC = ABC + ABC + ABC
# Time Complexity: O(min(m, n) * (m + n)), where m and n are the lengths of str1 and str2
# Space Complexity: O(min(m, n)), for storing the base string
