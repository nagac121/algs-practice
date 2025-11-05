/**
 * https://www.interviewbit.com/javascript-interview-questions/#call-apply-and-bind-methods
 * call():
 * Function.prototype.call()
 * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
 * @param thisArg — The object to be used as the this object.
 * @param args — Argument values to be passed to the function.
 */
function saySomething(message) {
  return this.name + " is " + message; // person4.name will be used as this.name
}
var person4 = { name: "John" };
saySomething.call(person4, "awesome");
// Returns "John is awesome"
