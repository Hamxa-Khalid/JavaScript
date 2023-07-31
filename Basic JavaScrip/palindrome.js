//Write a function that takes a string as input and returns true
//if it's a palindrome (reads the same backward as forward), false otherwise.
function palindrome(str) {
  let newStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (newStr === str) return true;
  else return false;
}

let str = "radar";
console.log(palindrome(str));
