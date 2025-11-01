# Flatten array

## Dry Run:

#### Initial Call:

`flattenArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]])`

- `result = []`

---

**Iteration 1:**
`i=0 → arr[0] = 1` (not array)
👉 `result = [1]`

**Iteration 2:**
`i=1 → arr[1] = 2` (not array)
👉 `result = [1, 2]`

**Iteration 3:**
`i=2 → arr[2] = 3` (not array)
👉 `result = [1, 2, 3]`

**Iteration 4:**
`i=3 → arr[3] = [4, 5, 6]` (is array)
👉 recursive call: `flattenArray([4, 5, 6])`

- Inside recursion:

  - result = \[]
  - push 4, 5, 6 → `[4, 5, 6]`
  - return `[4, 5, 6]`

Now back in outer loop:
👉 Push elements one by one → `[1, 2, 3, 4, 5, 6]`

---

**Iteration 5:**
`i=4 → arr[4] = [7, 8, [9, 10, 11], 12]` (is array)
👉 recursive call: `flattenArray([7, 8, [9, 10, 11], 12])`

- Inside recursion:

  - result = \[]
  - push 7 → `[7]`
  - push 8 → `[7, 8]`
  - arr\[2] = `[9, 10, 11]` → recursive call:

    - flattenArray(\[9, 10, 11]) → returns `[9, 10, 11]`
    - push each → `[7, 8, 9, 10, 11]`

  - arr\[3] = 12 → push → `[7, 8, 9, 10, 11, 12]`

- Return `[7, 8, 9, 10, 11, 12]`

Now back in outer loop:
👉 Push one by one → `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]`

---

**Iteration 6:**
`i=5 → arr[5] = [13, 14, 15]` (is array)
👉 recursive call: `flattenArray([13, 14, 15])`

- Inside recursion:

  - result = \[]
  - push 13, 14, 15 → `[13, 14, 15]`

- Return `[13, 14, 15]`

Now back in outer loop:
👉 Push one by one → `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]`

---

### Final Output:

```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

---

✅ So the function correctly flattens all levels of nesting.
✅ Each nested array is **expanded by recursion** and merged into the parent result **manually with the inner for-loop**.
