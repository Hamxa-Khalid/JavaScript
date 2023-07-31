const myList = [
  ["Choclate", 10],
  ["Biscuit", 5],
  ["Milk", 8],
  ["Eggs", 12],
  ["Bread", 1],
];

function removeItem(list) {
  list.pop();
}

function addItem(list) {
  let item = ["coffe", 1];
  list.push(item);
}

function displayItem(list) {
  console.log(list);
}

removeItem(myList);
addItem(myList);
displayItem(myList);
