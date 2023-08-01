/*
Write a function that demonstrates the difference in 
scope between variables declared with var and variables declared with let.
*/

var person = "Hamza";
let range = 5;
if (range > 2) {
  let greeting = "Hi";
  var personName = "Greeting";
  console.log(`${greeting} ${person}`);
}
// It will throw error at this point
console.log(`${greeting} ${person}`);

// It will not throw error at this point
console.log(`${personName} ${person}`);
