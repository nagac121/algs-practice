/**
 * https://www.interviewbit.com/javascript-interview-questions/#memoization
 */
function memoizedAddTo256() {
  var cache = {};

  return function (num) {
    if (num in cache) {
      // Check if num is a key in cache
      console.log("cached value");
      return cache[num];
    } else {
      cache[num] = num + 256;
      return cache[num];
    }
  };
}
var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return

/**
 * Diagram (in simple text form)
Global Scope
├── memoizedAddTo256  → function
├── memoizedFunc      → inner function (closure)
│     ▲
│     │
│     └── [[Closure]] → { cache: {} } (still alive)


So even though the outer function is done running,
its local variables live inside this closure box 🧳
because the inner function still “remembers” them.
 */
