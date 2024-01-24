// const { rest } = require("lodash");

function doubleSort(...restNumbers) {
  let arr = restNumbers; // initialize list
  // Make Copy with slice() method for
  let arr1 = arr.slice().sort((a, b) => a - b);
  let arr2 = arr.slice().sort((a, b) => b - a);
  // Return This
  let result = {
    ascending: arr1,
    descending: arr2,
  };

  return result;
}

// console.log(doubleSort(1, 234, 3, 4, 8, 6, 10, 9, -1, 20, 121, 123, 122, 122));

module.exports = doubleSort;
