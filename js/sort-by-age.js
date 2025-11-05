/**
 * Q. Given an array of objects, sort them based on their ages.
Ans. 
Sorting objects by age involves comparing age properties and rearranging them in ascending or descending order.
    Use the JavaScript `sort()` method to sort the array of objects.
    Example: `array.sort((a, b) => a.age - b.age)` for ascending order.
    For descending order, use: `array.sort((a, b) => b.age - a.age)`.
    Ensure the age property exists in each object to avoid errors.   
 * @param {*} arr 
 * @param {*} order 
 * @returns 
 */
function sortByAge(arr, order = "asc") {
  // make a shallow copy so original isn't mutated
  const copied = arr.slice();

  copied.sort((a, b) => {
    if (order === "asc") {
      return a.age - b.age; // ascending
    } else {
      return b.age - a.age; // descending
    }
  });

  return copied;
}
// Example usage:
const persons = [
  { name: "Alice", age: 30, id: 1 },
  { name: "Bob", age: 25, id: 2 },
  { name: "Charlie", age: 35, id: 3 },
];

console.log(sortByAge(persons, "asc"));
// -> [ { name:"Bob", age:25, id:2 }, { name:"Alice", age:30, id:1 }, { name:"Charlie", age:35, id:3 } ]

console.log(sortByAge(persons, "desc"));
// -> [ { name:"Charlie", age:35, id:3 }, { name:"Alice", age:30, id:1 }, { name:"Bob", age:25, id:2 } ]
