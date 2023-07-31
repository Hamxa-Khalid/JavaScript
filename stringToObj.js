/*
Write a function that takes a string as input and returns an object with
each character in the string as a key and its count as the value.
*/
function stringToObj(obj, str) {
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = str[str.length - 1 - i];
  }
  return obj;
}

str = "HamzA";
obj = {};
console.log(stringToObj(obj, str));
