/**
 * can place flowers editorial solution
 * difficulty: easy
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const emptyLeft = i === 0 || flowerbed[i - 1] === 0; // check if i is first element & its left is empty
      const emptyRight = i === flowerbed.length - 1 || flowerbed[i + 1] === 0; // check if i last element & its right is empty

      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1; // plant flower
        count++;
      }
    }
  }

  return count >= n;
};

let flowerbed = [1, 0, 0, 0, 1];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n)); // true

flowerbed = [1, 0, 0, 0, 1];
n = 2;
console.log(canPlaceFlowers(flowerbed, n)); // false

/**
 * Complexity Analysis
    Time complexity: O(n). A single scan of the flowerbed array of size n is done.
    Space complexity: O(1). Constant extra space is used.
 */
