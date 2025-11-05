// Function scope vs Block scope
function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a); // ✅ works, var is function-scoped
  console.log(b); // ❌ ReferenceError (block-scoped)
  console.log(c); // ❌ ReferenceError (block-scoped)
}
