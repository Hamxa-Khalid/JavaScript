//Write a function that takes a number as input and returns "Fizz" if the number is divisible by 3,
//"Buzz" if it's divisible by 5, "FizzBuzz" if it's divisible by both 3 and 5,
//and the number itself if none of the conditions are met.
function fizzBuzz(num) {
  let str = "";
  if (num % 3 === 0 && num % 5 === 0) {
    str = "FizzBuzz";
  } else if (num % 3 === 0) str = "Fizz";
  else if (num % 5 === 0) str = "Buzz";
  else str = "Not Divisble By 3 & 5";

  return str;
}

console.log(fizzBuzz(3));
