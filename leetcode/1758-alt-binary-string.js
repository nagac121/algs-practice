/**
 * company: opentext 
 date: 30-12-21
 timer: codility 30 mins 
 leetcode: 1758

 https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 https://www.geeksforgeeks.org/number-flips-make-binary-string-alternate/
 * There are N coins, each showing either heads or tails. We would like all the coins to form a 
sequence of alternating heads and tails. What is the minimum number of coins that must be reversed 
to achieve this?
Write a function:


that, given an array A consisting of N integers representing the coins, returns the minimum number 
of coins that must be reversed. Consecutive elements of array A represent consecutive coins and 
contain either a 0 (heads) or a 1 (tails).

Examples:
1 Given array A  [1, 0, 1, 0, 1, 1], the function should return 1. After reversing the sixth coin, 
we achieve an alternating sequence of coins [1, 0, 1, 0, 1, 0].
2. Given array A = [1, 1, 0, 1, 1], the function should return 2. After reversing the first and 
fifth coins, we achieve an alternating sequence [0, 1, 0, 1, 0].
3. Given array A = [D, 1, 0], the function should return 0. The sequence of coins is already 
alternating.
4. Given array A = [0, 1, 1, 0], the function should return 2. We can reverse the first and second 
coins to get the sequence: [1, 0, 1, 0].
Assume that:

• N is an integer within the range [1..100];
• each element of array A is an integer that can have one of the following values: 0, 1.

In your solution, focus on correctness. The performance     solution will not be the focus of the 
assessment.
Copyright 2009—2D21 by Codilily Limited. All Rights Reserved. Unauthorized copying, publication
oorr ddiisscclloossuurree prohibited.

 */
//  Utility method to flip a character
// DELETE CODE 1 AFTER OPEN TEXT INTERVIEW
// CODE 1 - submitted to opentext
// function face(ch) {
//   return ch == "0" ? "1" : "0";
// }
// //  Utility method to get minimum flips when
// //  alternate string starts with coinFace char
// function coinFlip(str, coinFace) {
//   let coinCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     //  if current character is not coinFace,
//     // increase face count
//     if (str.charAt(i) != coinFace) coinCount++;

//     //  face coinFace character each time
//     coinFace = face(coinFace);
//   }
//   return coinCount;
// }
// // method return minimum face to make binary
// // string alternate
// function minCoinCount(strArr) {
//   //  return minimum of following two
//   //  1) flips when alternate string starts with 0
//   //  2) flips when alternate string starts with 1
//   let str = strArr.join("");
//   return Math.min(coinFlip(str, "0"), coinFlip(str, "1"));
// }
// // let strArr = [0,0,0,1,0,1,0,1,1,1]; // 2
// let strArr = [0, 1, 1, 0]; // 2
// // console.log(typeof str);
// console.log(minCoinCount(strArr));

// CODE 2 - g4g sol
// Javascript program to find minimum number of
// flip to make binary string alternate

// Utility method to flip a character
function flip(ch) {
  return ch == "0" ? "1" : "0";
}

// Utility method to get minimum flips when
// alternate string starts with expected char
function getFlipWithStartingCharacter(str, expected) {
  let flipCount = 0;
  for (let i = 0; i < str.length; i++) {
    // if current character is not expected,
    // increase flip count
    if (str.charAt(i) != expected) flipCount++;

    // flip expected character each time
    expected = flip(expected);
  }
  return flipCount;
}

// method return minimum flip to make binary
// string alternate
function minFlipToMakeStringAlternate(str) {
  // return minimum of following two
  // 1) flips when alternate string starts with 0
  // 2) flips when alternate string starts with 1
  const minFlipCount = Math.min(
    getFlipWithStartingCharacter(str, "0"),
    getFlipWithStartingCharacter(str, "1")
  );
  console.log("min flip count: ", minFlipCount);
  return minFlipCount;
}

let str = "001";
// minFlipToMakeStringAlternate(str)

/**
 * Input : str = “001”
Output : 1
Minimum number of flips required = 1
We can face 1st bit from 0 to 1 

Input : str = “0001010111”
Output : 2
Minimum number of flips required = 2
We can face 2nd bit from 0 to 1 and 9th 
bit from 1 to 0 to make alternate 
string “0101010101”.
 */

/**
 * dry run
 * "001"
getFlipWithStartingCharacter(0)
flipCount: 0, 0, 1, 2
i: 0, 1, 2
expected: 1, 0, 1
res: 2

"001"
getFlipWithStartingCharacter(1)
flipCount: 0, 1, 1
i: 0, 1, 2
expected: 1, 0, 1
res: 1
 */
