// greet1 is a function that takes an object as a parameter
// and logs a greeting message using the object's properties.
function greet1(obj) {
  console.log(`Hello obj: ${obj.name}, age ${obj.age}`);
}

// greet2 is a function that uses destructuring in its parameter list
// to directly extract the 'name' and 'age' properties from the object.
function greet2(obj) {
  console.log(`Hello obj: ${obj.name}, age ${obj.age}`);
}

greet2({ name: "Alice", age: 25 });
// Output: Hello Alice, age 25
