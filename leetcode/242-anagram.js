/**
 242. Valid Anagram
  Easy
 */
function isAnagram(one, two) {
  //Change both words to lowercase for case insensitivity..
  var a = one.toLowerCase();
  var b = two.toLowerCase();

  // Sort the strings, then combine the array to a string. Examine the outcomes.
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

var wordOne = "Deepak";
var wordTwo = "Aman";
console.log(isAnagram(wordOne, wordTwo)); // false

wordOne = "Listen";
wordTwo = "Silent";
console.log(isAnagram(wordOne, wordTwo)); // true
