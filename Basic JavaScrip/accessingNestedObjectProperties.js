//Given an simple object, write a function that takes the object and a property name (as a string) and returns the value of that property.
const school = {
  name: "Example School",
  location: "Cityville",
  firstName: "John",
  lastName: "Doe",
  age: 17,
  math: 85,
  science: 78,
  history: 92,
  isOpen: true,
};
let prop = "firstName";
function checkProperty(obj, prop) {
  if (school.hasOwnProperty(prop)) {
    console.log(obj[prop]);
  } else {
    console.log("No Such Property");
  }
}

checkProperty(school, prop);
