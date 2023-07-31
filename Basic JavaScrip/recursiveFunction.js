function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n];
  }

  // Only change code above this line
}

let arr = [1, 2, 3, 4, 5];

let n = 3;

console.log(sum(arr, n));
