/**
 * https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/description/?utm_source=chatgpt.com
 * @easy
 * 2309. Greatest English Letter in Upper and Lower Case
 * Interview: codility

 * pass a string , return largest letter in alphabetical order,
 * which has both lowercase and uppercase letter.
 * if there are multiple such alphabets are there, then return largest letter in those,
 * for eg. if in string "aAbBc", then return B, if no such letter exists return "NO".
 */
function solution(s) {
  let itemObj = {};
  let hasPair = new Set();
  let largestLetterCode = 0;
  let largestLetter = "";

  // uppercase alphabet code is < lowercase ascii
  let sArr = s.split("");
  sArr.forEach((item) => {
    if (item === item.toUpperCase()) {
      itemObj[item] = "upper";
    } else {
      itemObj[item] = "lower";
    }
  });
  sArr.forEach((item) => {
    if (itemObj[item] === "upper") {
      if (itemObj[item.toLowerCase()]) {
        hasPair.add(item);
      }
    }
    if (itemObj[item] === "lower") {
      if (itemObj[item.toUpperCase()]) {
        hasPair.add(item);
      }
    }
  });
  if (hasPair.size) {
    for (key of hasPair) {
      if (key.charCodeAt(0) > largestLetterCode) {
        largestLetterCode = key.charCodeAt(0);
      }
    }
  } else {
    largestLetter = "NO";
  }
  largestLetter = String.fromCharCode(largestLetterCode).toUpperCase();
  return largestLetter;
}
