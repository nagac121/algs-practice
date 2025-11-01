# LEETCODE 75

## TABLE OF CONTENTS

[1 - Merge strings alternatively](#1---merge-strings-alternatively)  
[2 - GCD of strings](#2---gcd-of-strings)  
[3 - Kids with the greatest number of candies](#3---kids-with-the-greatest-number-of-candies)

## 1 - MERGE STRINGS ALTERNATIVELY

[⬆️ TABLE OF CONTENTS](#table-of-contents)

### Details

Alg: Merge Strings Alternately  
Difficulty: easy  
File name: 1-1768-merge-strings-alternately  
Leetcode no: 1768  
URL: <https://leetcode.com/problems/merge-strings-alternately/>

### Question

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

```txt
Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
```

```txt
Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s
```

```txt
Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d
```

Constraints:
1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

## Solution for Merge Strings Alternately

```js
function mergeStringsAlternatively(s1, s2) {
  let altArr = [];
  s1 = s1.split("");
  s2 = s2.split("");
  const minLength = Math.min(s1.length, s2.length); //  Store the minimum length of the two strings

  // loop through the shorter string
  for (let i = 0; i < minLength; i++) {
    altArr.push(s1[i]);
    altArr.push(s2[i]);
  }

  // Append the remaining characters from the longer string to the "altArr"
  altArr = altArr.concat(s1.slice(minLength), s2.slice(minLength));
  /**
   * If s1.length < s2.length, remaining chars from s2 are appended to the altArr
   * if s2.length < s1.length, remaining chars from s1 are appended to the altArr
   * if s1.length === s2.length, no remaining chars
   */
  return altArr.join("");
}

// const word1 = "abc", word2 = "pqr";
const word1 = "ab",
  word2 = "pqrs";
console.log(mergeStringsAlternatively(word1, word2));
```

## Dry run

### Input 1

Let us take the example where
word1 = "abc" and
word2 = "pqr".

1. Initialize s1 and s2 as arrays of characters: s1 = ['a', 'b', 'c'] and s2 = ['p', 'q', 'r'].

2. For:
   - The loop runs for i from 0 to the minimum length of s1 and s2 (which is 3 in this case because both strings have the same length). Inside the loop:
   - altArr.push(s1[i]): Push 'a' into altArr.
   - altArr.push(s2[i]): Push 'p' into altArr.
   - altArr.push(s1[i]): Push 'b' into altArr.
   - altArr.push(s2[i]): Push 'q' into altArr.
   - altArr.push(s1[i]): Push 'c' into altArr.
   - altArr.push(s2[i]): Push 'r' into altArr.

At this point, altArr is ['a', 'p', 'b', 'q', 'c', 'r'].

3. Concat:
   - Now, the remaining characters from the longer string are appended using concat:
   - s1.slice(3): Slice the remaining characters from s1 starting from index 3 (empty array in this case).
   - s2.slice(3): Slice the remaining characters from s2 starting from index 3 (empty array in this case).

Concatenate these slices with altArr: altArr.concat([], []), which is equivalent to altArr.concat().
Now, altArr is still ['a', 'p', 'b', 'q', 'c', 'r']. 4. join:

- Finally, join the array into a string: altArr.join(''), which results in the final merged string: "apbqcr".

So, the expected output for this example is "apbqcr", which matches the result when the function is called with word1 = "abc" and word2 = "pqr"

### Input 2

word1 = "ab", word2 = "pqrs"

1. Initialize s1 and s2 as arrays of characters: s1 = ['a', 'b'] and s2 = ['p', 'q', 'r', 's'].
2. For:
   - The loop runs for i from 0 to the minimum length of s1 and s2 (which is 2 in this case because s1 has length 2 and s2 has length 4). Inside the loop:
   - altArr.push(s1[i]): Push 'a' into altArr.
   - altArr.push(s2[i]): Push 'p' into altArr.
   - altArr.push(s1[i]): Push 'b' into altArr.
     At this point, altArr is ['a', 'p', 'b'].
3. concat:
   - Now, the remaining characters from the longer string are appended using concat:
   - s1.slice(2): Slice the remaining characters from s1 starting from index 2 (empty array in this case).
   - s2.slice(2): Slice the remaining characters from s2 starting from index 2 (['r', 's']).
     Concatenate these slices with altArr: altArr.concat([], ['r', 's']), which results in ['a', 'p', 'b', 'r', 's'].
4. join:
   - Finally, join the array into a string: altArr.join(''), which results in the final merged string: "apbqrs".
     So, the expected output for this example is "apbqrs", which matches the result when the function is called with word1 = "ab" and word2 = "pqrs".

### input 3

Here's a step-by-step **dry run** for:

```js
mergeStringsAlternatively("pqrs", "ab");
```

---

### ✅ Function Execution:

**Inputs**
`s1 = "pqrs"`
`s2 = "ab"`

---

### 🔹 Step 1: Convert strings to arrays

```js
s1 = ["p", "q", "r", "s"];
s2 = ["a", "b"];
altArr = [];
```

---

### 🔹 Step 2: Loop from `i = 0` to `Math.min(4, 2) = 2`

**i = 0**

- `altArr.push('p') → ['p']`
- `altArr.push('a') → ['p', 'a']`

**i = 1**

- `altArr.push('q') → ['p', 'a', 'q']`
- `altArr.push('b') → ['p', 'a', 'q', 'b']`

✅ After loop:

```js
altArr = ["p", "a", "q", "b"];
```

---

### 🔹 Step 3: Append remaining characters

```js
s1.slice(2) = ['r', 's']
s2.slice(2) = [] // s2 has only 2 characters
```

So,

```js
altArr = altArr.concat(['r', 's'], []) → ['p', 'a', 'q', 'b', 'r', 's']
```

---

### 🔹 Step 4: Join the array

```js
altArr.join("") = "paqbrs"
```

---

### ✅ Final Output:

```js
return "paqbrs";
```

---

### 📌 Summary:

```
word1:  p   q   r   s
word2:  a   b
merged: p a q b r s
```

- time complexity: O(n)
- space complexity: O(n)

---

## 2 - GCD OF STRINGS

[⬆️ TABLE OF CONTENTS](#table-of-contents)

### Details - 1075

Alg: gcd of strings  
Difficulty: easy  
File name: 2-1075-gcd-of-strings  
Leetcode no: 1075  
URL: <https://leetcode.com/problems/greatest-common-divisor-of-strings/>

### Question - 1075

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

```txt
Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
```

Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

### Solution: Approach 3 - GCD + Concatenation Trick

```js
function gcdOfStrings(str1, str2) {
  // Quick check to see if a common pattern is even possible
  if (str1 + str2 !== str2 + str1) return "";

  // Compute gcd of the string lengths
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const g = gcd(str1.length, str2.length);

  // Return the prefix up to that gcd length
  return str1.slice(0, g);
}
```

This is a recursive implementation of the Euclidean algorithm to compute the Greatest Common Divisor (GCD) of two numbers.

```js
gcd(a, b) {
if (b === 0) return a;
else return gcd(b, a % b);
}
```

• If b becomes 0, then a is the GCD.  
• Otherwise, call gcd() again with:  
• b as the new first argument,  
• a % b as the new second argument.  
• This recursive call continues until b === 0.

Example:  
gcd(8, 12)  
gcd(8, 12) → gcd(12, 8)  
gcd(12, 8) → gcd(8, 4)  
gcd(8, 4) → gcd(4, 0) → returns 4 ✅

### Dry run

---

#### **Example 1**

**Input:** `str1 = "ABCABC"`, `str2 = "ABC"`

1. **Check concatenation trick**

   - `str1 + str2 = "ABCABCABC"`
   - `str2 + str1 = "ABCABCABC"`
   - They’re equal ✅ → means both strings share the same repeating pattern.

2. **Find GCD of lengths**

   - `len(str1) = 6`, `len(str2) = 3`
   - `gcd(6, 3)` → `gcd(3, 0)` → `3`.

3. **Return prefix of length 3 from str1**

   - `str1.slice(0, 3)` = `"ABC"`

**Output:** `"ABC"`

---

#### **Example 2**

**Input:** `str1 = "ABABAB"`, `str2 = "ABAB"`

1. **Check concatenation trick**

   - `str1 + str2 = "ABABABABAB"`
   - `str2 + str1 = "ABABABABAB"`
   - Equal ✅.

2. **Find GCD of lengths**

   - `len(str1) = 6`, `len(str2) = 4`
   - `gcd(6, 4)` → `gcd(4, 2)` → `gcd(2, 0)` → `2`.

3. **Return prefix of length 2 from str1**

   - `str1.slice(0, 2)` = `"AB"`

**Output:** `"AB"`

---

#### **Example 3**

**Input:** `str1 = "LEET"`, `str2 = "CODE"`

1. **Check concatenation trick**

   - `str1 + str2 = "LEETCODE"`
   - `str2 + str1 = "CODELEET"`
   - Not equal ❌ → means no common repeating pattern possible.

2. **Return empty string**

   - `""`

**Output:** `""`

---

````
Alright — here’s your **one-page dry run table** for the `gcdOfStrings` problem using the `gcd` helper.
I’ll use the example:

```js
gcdOfStrings("ABCABC", "ABC");
````

---

### **Step 1 – Inputs**

| Variable | Value      |
| -------- | ---------- |
| `str1`   | `"ABCABC"` |
| `str2`   | `"ABC"`    |
| `len1`   | `6`        |
| `len2`   | `3`        |

---

### **Step 2 – GCD Helper Dry Run**

`gcd(a, b) → (b === 0 ? a : gcd(b, a % b))`

| Call # | a   | b   | b===0? | a % b | Next call | Return |
| ------ | --- | --- | ------ | ----- | --------- | ------ |
| 1      | 6   | 3   | No     | 0     | gcd(3, 0) | —      |
| 2      | 3   | 0   | Yes    | —     | —         | **3**  |

**GCD result = 3**

---

### **Step 3 – Common String Extraction**

We take the substring of length `3` from `str1`:

```
str1.substring(0, 3) → "ABC"
```

---

### **Step 4 – Verification**

Check if both strings can be built from `"ABC"`:

| String   | Repeat count | Reconstructed | Matches original? |
| -------- | ------------ | ------------- | ----------------- |
| "ABCABC" | 6/3 = 2      | "ABC" + "ABC" | ✅                |
| "ABC"    | 3/3 = 1      | "ABC"         | ✅                |

Both match → return `"ABC"`

---

✅ **Interview memory trick**

1. Check `(str1 + str2) === (str2 + str1)` to ensure they share a repeating pattern.
2. Use `gcd(len1, len2)` to find the base substring length.
3. Return `str1.substring(0, gcdLen)`.

---

If you want, I can give you **the complete pattern-recognition + code template** for _any_ GCD-of-strings style problem so you can solve it in 20 seconds in an interview.
It’s the exact trick FAANG interviewers look for.

## 3 - KIDS WITH THE GREATEST NUMBER OF CANDIES

[⬆️ TABLE OF CONTENTS](#table-of-contents)

### Details - 1431

Alg: kids with the greatest number of candies  
Difficulty: easy  
File name: 3-1431-kids-with-the-greatest-number-of-candies  
Leetcode no: 1431  
URL: <https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75/>

### problem

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies.

#### Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3  
Output: [true,true,true,false,true]  
Explanation: If you give all extraCandies to:

- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

#### Example 2:

Input: candies = [4,2,1,1,2], extraCandies = 1  
Output: [true,false,false,false,false]  
Explanation: There is only 1 extra candy.  
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

#### Example 3:

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]

Constraints:  
• n == candies.length  
• 2 <= n <= 100  
• 1 <= candies[i] <= 100  
• 1 <= extraCandies <= 50

### Hint 1

For each kid check if candies[i] + extraCandies ≥ maximum in Candies[i].

### Solution :

```js
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
```

### ⚡ Complexity

`Math.max(...candies) → O(n)`

`.map() → O(n)`  
➡️ Overall O(n) time and O(n) space (output array).
This is optimal.

---

### ✨ Alternative (memory-efficient if interviewer asks)

If you wanted to avoid creating a new array (though LeetCode expects an array output), you could mutate in place:

```js
function kidsWithTheGreatestNumberOfCandies(candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= maxCandies;
  }
  return candies;
}
```

we are iterating through for loop and changing values there and then itself ie in-place mutation

👉 For interview purposes, stick with your map version (clean, readable, expressive).
The in-place mutation version can be mentioned as an optimization if interviewer asks.

---

### Dry run

Perfect 👍 Let’s **dry run** your function on each test case step by step so you see how it works under the hood.

---

#### 🧪 Example 1

```js
candies = [2, 3, 5, 1, 3];
extraCandies = 3;
```

1. `maxCandies = Math.max(...candies) = 5`
2. For each `candy`:

   - `2 + 3 >= 5` → `true`
   - `3 + 3 >= 5` → `true`
   - `5 + 3 >= 5` → `true`
   - `1 + 3 >= 5` → `false`
   - `3 + 3 >= 5` → `true`

✅ Output: `[true, true, true, false, true]`

---

#### 🧪 Example 2

```js
candies = [4, 2, 1, 1, 2];
extraCandies = 1;
```

1. `maxCandies = Math.max(...candies) = 4`
2. For each `candy`:

   - `4 + 1 >= 4` → `true`
   - `2 + 1 >= 4` → `false`
   - `1 + 1 >= 4` → `false`
   - `1 + 1 >= 4` → `false`
   - `2 + 1 >= 4` → `false`

✅ Output: `[true, false, false, false, false]`

---

#### 🧪 Example 3

```js
candies = [12, 1, 12];
extraCandies = 10;
```

1. `maxCandies = Math.max(...candies) = 12`
2. For each `candy`:

   - `12 + 10 >= 12` → `true`
   - `1 + 10 >= 12` → `false`
   - `12 + 10 >= 12` → `true`

✅ Output: `[true, false, true]`

---
