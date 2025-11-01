// https://www.interviewbit.com/javascript-interview-questions/#code-to-find-the-vowels
// Write a function that takes a string as input and returns the number of vowels in the string.
const findVowels = (str) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    // Convert to lowercase to handle uppercase vowels
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(findVowels("hello world")); // 3
