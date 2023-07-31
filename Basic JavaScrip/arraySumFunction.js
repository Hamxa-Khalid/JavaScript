//Write a function that takes an array of numbers as input and returns the sum of all elements in the array.
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let arr = [1, 2, 3, 4];

console.log(arrSum(arr));
