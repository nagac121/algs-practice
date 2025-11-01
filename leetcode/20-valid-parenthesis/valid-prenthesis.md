name: 20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/description/
solution: https://www.geeksforgeeks.org/dsa/check-for-balanced-parentheses-in-an-expression/
difficulty: Easy
interview: epam on 14-10-21

Description:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

solution has two approaches given by gfg, but only approach 1 can be followed in js.
