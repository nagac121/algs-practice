/**
 company: opentext 
 date: 30-12-21
 timer: codility 30 mins 
 leetcode: 1647
 urls: 
 https://www.geeksforgeeks.org/minimum-characters-required-to-be-removed-to-make-frequency-of-each-character-unique/

 similar: https://leetcode.com/problems/unique-number-of-occurrences/
 https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/

Write a function:
that, given a string S consisting of N lowercase letters, returns the minimum number of letters 
that must be deleted to obtain a word in which every letter occurs a unique number of times. We 
only care about occurrences of letters that agpear at least once in result.
Examples:
1. Given S = "aaaabbbb", the function should return 1. We can delete one occurrence of a or one 
occurrence of b. Then one letter will occur four times and the other one three times.
2. Given S = "ccaaffddecee", the function should return 6. For example, we can delete all 
occurrences of e and f and one occurrence of d to obtain the word "ccaadc™. Note that both e and f 
will occur zero times in the new word, but that is fine, since we only care about letters that 
appear at least once.
3. Given S = "eeee", the function should return 0 (there is no need to delete any characters).
4. Given S = "example", the function should return 4.
Write an eFicient algorithm for the following assumptions:
• N is an integer within the range [0..3O0,OD0];
• string S consists only of lowercase letters (a—z).
Copyfight 2009—2D21 by Codility Limited. All Rights Reserved. Unauthorized copying, publicalion
oorr ddiisscclloossuurree prohibited.
 */
// CODE - submitted openText
// Function to find the minimum count of
// characters required to be deleted to make
// frequencies of all characters unique
// function charDeletionCount(str) {
//   str = str.split("");
//   let N = str.length;
//   // Stores frequency of each
//   // distinct character of str

//   let mp = new Map();
//   // Store frequency of each distinct
//   // character such that the largest
//   // frequency is present at the top

//   let largestFreq = [];

//   // Stores minimum count of characters
//   // required to be deleted to make
//   // frequency of each character unique

//   let delChar = 0;
//   // Traverse the String

//   for (let i = 0; i < N; i++) {
//     if (mp.has(str[i])) {
//       mp.set(str[i], mp.get(str[i]) + 1);
//     } else {
//       // Update frequency of str[i]

//       mp.set(str[i], 1);
//     }
//   }
//   // Traverse the map

//   for (let [key, value] of mp.entries()) {
//     // Insert current
//     // frequency into pq

//     largestFreq.push(value);
//   }

//   largestFreq.sort(function (a, b) {
//     return b - a;
//   });
//   // Traverse the priority_queue

//   while (largestFreq.length != 0) {
//     // Stores topmost
//     // element of pq

//     let frequent = largestFreq[0];
//     // Pop the topmost element

//     largestFreq.shift();
//     // If pq is empty

//     if (largestFreq.length == 0) {
//       // Return cntChar

//       return delChar;
//     }
//     // If frequent and topmost
//     // element of pq are equal

//     if (frequent == largestFreq[0]) {
//       // If frequency of the topmost
//       // element is greater than 1

//       if (frequent > 1) {
//         // Insert the decremented
//         // value of frequent

//         largestFreq.push(frequent - 1);
//         largestFreq.sort(function (a, b) {
//           return b - a;
//         });
//       }
//       // Update cntChar

//       delChar++;
//     }
//   }

//   return delChar;
// }

// // Driver Code
// let str = "abbbcccd";
// // let str = "eeee";
// // let N = str.length;
// // console.log(charDeletionCount(str.split(""), N));
// console.log(charDeletionCount(str));

// CODE 2 - code to follow
// Javascript program to implement
// the above approach

// Function to find the minimum count of
// characters required to be deleted to make
// frequencies of all characters unique
function minCntCharDeletionsfrequency(str) {
  str = str.split("");
  let N = str.length;
  // Stores frequency of each
  // distinct character of str
  let mp = new Map();

  // Store frequency of each distinct
  // character such that the largest
  // frequency is present at the top
  let pq = []; // priority queue

  // Stores minimum count of characters
  // required to be deleted to make
  // frequency of each character unique
  let cntChar = 0;

  // Traverse the String
  for (let i = 0; i < N; i++) {
    // Update frequency of str[i]
    if (mp.has(str[i])) {
      mp.set(str[i], mp.get(str[i]) + 1);
    } else {
      mp.set(str[i], 1);
    }
  }
  console.log("mp: ", mp);

  // Traverse the map
  for (let [key, value] of mp.entries()) {
    // Insert current
    // frequency into pq
    pq.push(value);
  }

  pq.sort(function (a, b) {
    return b - a;
  });
  console.log("pq: ", pq);

  // Traverse the priority_queue
  while (pq.length != 0) {
    // Stores topmost
    // element of pq
    let frequent = pq[0];

    // Pop the topmost element
    pq.shift();

    // If pq is empty
    if (pq.length == 0) {
      // Return cntChar
      return cntChar;
    }

    // If frequent and topmost
    // element of pq are equal
    if (frequent == pq[0]) {
      // If frequency of the topmost
      // element is greater than 1
      if (frequent > 1) {
        // Insert the decremented
        // value of frequent
        pq.push(frequent - 1);
        pq.sort(function (a, b) {
          return b - a;
        });
      }
      // Update cntChar
      cntChar++;
    }
  }
  return cntChar;
}

// Driver Code
let str = "abbbcccd";
console.log(minCntCharDeletionsfrequency(str));
// This code is contributed by unknown2108

/** DRY RUN
 * "abbbcccd"
mp: { 'a' => 1, 'b' => 3, 'c' => 3, 'd' => 1 }
pq: initial: [ 3, 3, 1, 1 ], modified from i0: [3,1,1], [3,2,1,1], [2,1,1],[1,1],[1],[1,0],[0],[]
frequent: 3,3,2,1,1,0
cntChar: 1,2
res: 2
 */

/**
 * need to go through once again, need to understand alg 
 */