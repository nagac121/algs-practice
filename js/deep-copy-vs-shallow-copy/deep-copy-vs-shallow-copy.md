# DEEP COPY vs SHALLOW COPY

Good question — that **“deep copy an object with multiple nested levels”** problem is **not exactly from LeetCode**, but it’s **a very common JavaScript interview coding question**, especially for **UI / Frontend roles** (like the one you mentioned at Intercontinental Exchange).

Let’s break this down:

---

### 🔍 What it is

They’re testing whether you understand **deep vs shallow copy** in JavaScript — i.e., when objects contain other objects (nested structures), how to copy them **without reference sharing**.

## Example:

```js
const obj = {
  name: "John",
  address: {
    city: "Hyderabad",
    pincode: 500001,
  },
};
```

If you do:

```js
const copy = { ...obj };
```

→ That’s a **shallow copy**.
`copy.address` still points to the same object as `obj.address`. If you change obj then copy will change too.

A **deep copy** would create **entirely new nested objects**.

---

### 🧠 Ways to Deep Copy

**1️⃣ JSON method (simple, but limited)**

```js
const deepCopy = JSON.parse(JSON.stringify(obj));
```

✅ Works for plain objects
❌ Fails for functions, Dates, Maps, Sets, undefined, etc.

---

**2️⃣ Recursive approach (often asked in interviews)**
You may be asked to write your own version, like this:

```js
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}
```

✅ Works for nested objects and arrays
❌ Doesn’t handle circular references (advanced follow-up question)

---

**3️⃣ Using `structuredClone()` (modern JS feature)**

```js
const deepCopy = structuredClone(obj);
```

✅ Best modern way (handles nested levels, Dates, Maps, etc.)
❌ Not supported in very old browsers

---

### 🧩 Is it on LeetCode?

- **Not directly.**
  LeetCode rarely asks pure JavaScript or browser-specific questions.
- But this problem **could appear** in **frontend system design**, **UI coding rounds**, or **JS fundamentals tests**.
- You might find **similar recursive problems** on LeetCode (like “clone graph” or “copy linked list with random pointer”), which **conceptually test the same recursion/deep-copy idea**.

---

### 🏁 Summary

| Topic                     | Where It Appears                                |
| ------------------------- | ----------------------------------------------- |
| Deep copy in JS           | Frontend & UI interviews                        |
| Related LeetCode concepts | Graph/linked list cloning                       |
| Skills tested             | Recursion, JS objects, references, immutability |

---

Would you like me to show you **how to implement a deep clone that handles circular references**, the version senior UI interviews usually expect?
