//Write a function that takes a number as input
//and returns true if the number is a prime number
//false otherwise.
function checkPrimeNumber(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(checkPrimeNumber(37));
