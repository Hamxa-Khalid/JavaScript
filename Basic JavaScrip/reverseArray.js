//Write a function that takes an array as input
//and returns a new array with the elements in reverse order.

function reverseArray(arr1) {
  let arr2 = [];
  let num = 0;
  let length = arr1.length;
  for (let i = 0; i < length; i++) {
    num = arr1.pop();
    arr2.push(num);
  }
  return arr2;
}

let arr1 = [1, 2, 4, 5, 6];
console.log(reverseArray(arr1));
