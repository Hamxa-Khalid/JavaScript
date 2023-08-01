/* Implement a function that takes an object as an argument and returns a new object 
that is a copy of the input object without changing the original object. */
function changeObject(obj) {
  newObject = obj;
  newObject["personSpecialization"] = "API Testing";
  return newObject;
}

let obj = {
  perosnName: "Hamza",
  personComapny: "SpringSynergy",
  personJobTitle: "QA",
};
//Uncomment the following code and function will not work
// Object.freeze(obj);

console.log(changeObject(obj));
