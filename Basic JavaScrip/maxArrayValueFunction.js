//Write a function that takes an array of numbers as input and returns the largest value in the array.
function maxArrayValue(arr) {
  let sum = 0;
  arr.forEach((value) => {
    if (value > sum) sum = value;
  });
  return sum;
}

let arr = [10, 1, 2, 9, 3, 11, 4, 5];
console.log(maxArrayValue(arr));
