function kidsWithTheGreatestNumberOfCandies(candies, extraCandies) {
  const maxCandies = Math.max(...candies); // find the max candies any kid has
  return candies.map((candy) => candy + extraCandies >= maxCandies); // check if each kid can reach or exceed max candies
}

// Example 1
console.log(kidsWithTheGreatestNumberOfCandies([2, 3, 5, 1, 3], 3));
// Output: [true, true, true, false, true]

// Example 2
console.log(kidsWithTheGreatestNumberOfCandies([4, 2, 1, 1, 2], 1));
// Output: [true, false, false, false, false]

// Example 3
console.log(kidsWithTheGreatestNumberOfCandies([12, 1, 12], 10));
// Output: [true, false, true]

export default kidsWithTheGreatestNumberOfCandies;
