function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  console.log(product);
  return product;
}

// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);

multiplyAll([
  [5, 1],
  [0.2, 4, 0.5],
  [3, 9],
]);
