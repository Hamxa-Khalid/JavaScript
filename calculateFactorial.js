//Write a function that takes a positive integer as input and returns its factorial.
function factorial(n) {
  if (n < 0) return `${n} is not positive`;
  else if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(4));
