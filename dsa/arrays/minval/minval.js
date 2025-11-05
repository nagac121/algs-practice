// https://www.w3schools.com/dsa/dsa_data_arrays.php
// Algorithm: Find The Lowest Value in an Array
// py -> js conversion by github copilot

const myArray = [7, 12, 9, 4, 11];
let minVal = myArray[0];

for (const i of myArray) {
  console.log("Current value:", i);
  if (i < minVal) {
    minVal = i;
  }
}

console.log("Lowest value:", minVal);

// JavaScript
