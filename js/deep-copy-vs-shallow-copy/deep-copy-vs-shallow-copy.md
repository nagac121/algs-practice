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

#### QA

🧠 1️⃣ Why do we check obj.hasOwnProperty(key)?

You’re right that in most practical cases, especially when you wrote the object yourself (not inherited from a prototype), all keys you get in a for...in loop will belong to the object itself.

However:

for...in loops through both own and inherited enumerable properties.

Example:

```js
const parent = { shared: 123 };
const child = Object.create(parent);
child.name = "ICE";

for (let key in child) {
  console.log(key); // name, shared
}
```

🔹 shared is not defined inside child — it comes from its prototype.
🔹 child.hasOwnProperty('shared') → false.

So, hasOwnProperty ensures you don’t accidentally copy prototype chain properties (which could lead to unexpected behavior or infinite recursion).

If you are 100% sure your input has no prototype pollution or custom prototypes, you can safely omit it.
But adding it is considered a defensive, safe coding practice — especially in interview code.

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

Excellent question 👏 — this shows you’re thinking like a **senior engineer**, not just coding blindly.

Let’s go step-by-step.

---

---

# Let’s Dry Run It

We’ll use this example:

```js
const person = {
  name: "John",
  address: {
    city: "Hyderabad",
    pin: 500001,
  },
  skills: ["JS", "React"],
};
```

Now we call:

```js
const clone = deepCopy(person);
```

---

### Step 1: `deepCopy(person)`

- `person` is an object → not null → proceed.
- Create `copy = {}`.

Iterate over keys: `name`, `address`, `skills`.

---

### ➤ Key = "name"

`obj.name` = `"John"` → a primitive.
→ `deepCopy("John")` returns `"John"` immediately.
`copy.name = "John"`.

---

### ➤ Key = "address"`

`obj.address` = `{ city: "Hyderabad", pin: 500001 }`
→ an object → recursive call.

#### 🌀 Call: `deepCopy({ city: "Hyderabad", pin: 500001 })`

- Create `copy = {}`.
- Keys: `city`, `pin`.

→ For `"city"` → `"Hyderabad"` (primitive) → copied.
→ For `"pin"` → `500001` (primitive) → copied.

Returns `{ city: "Hyderabad", pin: 500001 }`.

Now back in the parent:
`copy.address = { city: "Hyderabad", pin: 500001 }`.

---

### ➤ Key = "skills"`

`obj.skills` = `["JS", "React"]` → Array → recursive call.

#### 🌀 Call: `deepCopy(["JS", "React"])`

- `Array.isArray(obj)` → true → `copy = []`.
- Iterate indices `0`, `1`.

→ For `0`: `"JS"` (primitive) → copied.
→ For `1`: `"React"` (primitive) → copied.

Returns `["JS", "React"]`.

Now back in parent:
`copy.skills = ["JS", "React"]`.

---

✅ Final return:

```js
{
  name: "John",
  address: { city: "Hyderabad", pin: 500001 },
  skills: ["JS", "React"]
}
```

---

### ✅ Verification:

```js
clone.address.city = "Chennai";
console.log(person.address.city); // still "Hyderabad" ✅
```

That’s the sign of a **true deep copy** (no shared references).

---

## 🔍 Summary

| Step                      | Purpose                           |
| ------------------------- | --------------------------------- |
| `typeof obj !== "object"` | Stops recursion on primitives     |
| `Array.isArray(obj)`      | Keeps type (array vs object)      |
| `for...in`                | Loops through all enumerable keys |
| `hasOwnProperty()`        | Avoids prototype pollution        |
| Recursive call            | Clones nested levels              |

---
