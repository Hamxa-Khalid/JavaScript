/**
 * Write a function called sumAll that takes multiple arguments and uses the rest parameter
 *  to collect them into an array and returns the sum of all the elements in the array.
 */
const sumAll = (...rest) => {
  let arr = [];
  arr.push(...rest);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};

sumAll(1, 2, 4);
