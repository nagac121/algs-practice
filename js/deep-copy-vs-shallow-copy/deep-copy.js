function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  let copy = Array.isArray(obj) ? [] : {}; // array is also object type

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}
const person = {
  name: "John",
  address: {
    city: "Hyderabad",
    pin: 500001,
  },
  skills: ["JS", "React"],
};
const copiedPerson = deepCopy(person);
console.log(copiedPerson);
