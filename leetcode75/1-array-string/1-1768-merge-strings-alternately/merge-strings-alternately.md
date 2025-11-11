url: https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
leetcode no: 1768
name: Merge Strings Alternately
from: leetcode75
difficulty: easy
py solution: leetcode editorial
js solution: Python → JS conversion by GitHub Copilot

- Description:
- You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1: a b c
word2: p q r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1: a b
word2: p q r s
merged: a p b q r s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1: a b c d
word2: p q
merged: a p b q c d
Constraints:

    1 <= word1.length, word2.length <= 100
    word1 and word2 consist of lowercase English letters.

alg:
The idea is simple, we create a result string. We one by one append characters of both given strings in alternate style.

## APPROACH 1 VS APPROACH 2

Between the two, approach 1 (the version with the while loop and two pointers) is better to
present in an interview.

Reasons:
It clearly shows the intent to alternate between the two strings, handling different lengths
naturally.
The use of two pointers (i and j) is a common and clear pattern for merging or
traversing two sequences.

It is more flexible and generalizes well to similar problems.
Many interviewers expect to see the two-pointer pattern for merging tasks.

Approach 2 (the for loop with max(len(word1), len(word2))) is also correct and clean,
but approach 1 is more idiomatic for merge problems and demonstrates a classic algorithmic technique.

Summary:
Present the code with the while loop and two pointers (approach 1) in interviews for best clarity
and alignment with standard practices.
