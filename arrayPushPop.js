const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
const arr2 = arr.pop();

console.log("This is array 2" , arr2)

console.log("This is simple arr" , arr);

arr.push(arr2);

console.log("Array after push", arr)