/* Create an array using const, and then write a function that tries 
to modify the array by adding or removing elements. */

function mutateArray(arr) {
  //   arr = [2, 4, 5, 6];
  arr.pop();
  arr.push(9);
  return arr;
}

const arr = [1, 2, 3, 4, 5];
//After uncommenting following we can avoind mutation.
// Object.freeze(arr);
console.log(mutateArray(arr));
// console.log(arr);
