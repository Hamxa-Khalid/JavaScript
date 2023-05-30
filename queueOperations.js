function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    arr.unshift(item);
    
    return item;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [5, 6, 7, 8, 9];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 1));
  console.log("After: " + JSON.stringify(testArr));