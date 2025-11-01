# 2625. Flatten Deeply Nested Array

> Difficulty: medium

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

> Example 1:

Input:  
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]  
n = 0  
Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

Explanation  
Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.

> Example 2:

Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]  
n = 1  
Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

Explanation  
The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.

> Example 3:

Input:  
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]  
n = 2  
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

Explanation  
The maximum depth of any subarray is 1. Thus, all of them are flattened.

Constraints:

0 <= count of numbers in arr <= 105
0 <= count of subarrays in arr <= 105
maxDepth <= 1000
-1000 <= each number <= 1000
0 <= n <= 1000

## Dry run

Perfect 👍 Let’s **dry run `flattenWithDepth()`** with your example array:

Input:

```js
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
```

---

## Case 1: **depth = 0**

- Condition `if (n === 0)` → true
- Returns `arr.slice()` (just a shallow copy).
  ✅ Output:

```
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
```

---

## Case 2: **depth = 1**

1. Start: result = `[]`
2. `1, 2, 3` → not arrays → push → `[1, 2, 3]`
3. `[4, 5, 6]` → array

   - Call `flattenWithDepth([4,5,6], 0)` → returns `[4,5,6]`
   - Concat → `[1, 2, 3, 4, 5, 6]`

4. `[7, 8, [9,10,11], 12]` → array

   - Call `flattenWithDepth([7,8,[9,10,11],12], 0)` → returns as-is
   - Concat → `[1,2,3,4,5,6, 7,8,[9,10,11],12]`

5. `[13, 14, 15]` → array

   - Call `flattenWithDepth([13,14,15], 0)` → returns `[13,14,15]`
   - Concat → `[1,2,3,4,5,6,7,8,[9,10,11],12,13,14,15]`

✅ Output:

```
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
```

---

## Case 3: **depth = 2**

1. Start: result = `[]`
2. `1,2,3` → push → `[1,2,3]`
3. `[4,5,6]` → flattenWithDepth(\[4,5,6], 1) → returns `[4,5,6]` → concat
   → `[1,2,3,4,5,6]`
4. `[7,8,[9,10,11],12]` → flattenWithDepth(...,1)

   - Inside that call:

     - `7,8` push
     - `[9,10,11]` with depth=0 → returns `[9,10,11]` (unchanged)
     - `12` push
     - result = `[7,8,[9,10,11],12]`
       → Back to outer → concat → `[1,2,3,4,5,6,7,8,[9,10,11],12]`

5. `[13,14,15]` → flattenWithDepth(...,1) → `[13,14,15]` → concat
   → `[1,2,3,4,5,6,7,8,[9,10,11],12,13,14,15]`

✅ Output:

```
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
```

Oops 🤔 looks the same as depth=1! Why?
👉 Because `[9,10,11]` needed depth=2 to fully flatten. Let’s go deeper.

---

## Case 4: **depth = 3**

Now when flattening `[7,8,[9,10,11],12]`:

- depth=2 goes inside `[9,10,11]` with depth=1 → flattens it to `[9,10,11]` (because depth still > 0).
- That merges fully.

✅ Output:

```
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
```

---

### 🔹 Final Summary

- **depth = 0** → no flattening
- **depth = 1** → `[4,5,6]` flattened, `[9,10,11]` stays
- **depth = 2** → same as depth=1 for this example (because `[9,10,11]` is one level deeper)
- **depth = 3** → everything flattened

---

Would you like me to **sketch the recursion tree** (like step-by-step stack frames expanding and returning) for the depth=2 case, so you can see exactly why `[9,10,11]` isn’t touched until depth=3?
