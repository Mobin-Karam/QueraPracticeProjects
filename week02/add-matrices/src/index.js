let start = new Date(); // start measuring time
let matrix1 = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];
let matrix2 = [
  [3, 2, 3, 4],
  [5, 2, 3, 4],
  [7, 2, 3, 4],
  [9, 2, 3, 4],
];
function addMatrices(matrix1, matrix2, o) {
  let arr = [];
  let sum;
  for (let x = 0; x < matrix1.length; x++) {
    for (let i = 0; i < matrix2[x].length; i++) {
      sum = matrix1[x][i] + matrix2[x][i];
      arr.push(sum);
    }
  }
  let bigArr = [];
  for (let i = 0; i < matrix2.length; i++) {
    let n = 0;
    bigArr.push(arr.splice(n, n + o));
    n += o;
  }
  return bigArr;
}
// addMatrices(matrix1, matrix2, 4);
console.log(addMatrices(matrix1, matrix2,4));
let end = new Date(); // end measuring time
alert(`The loop took ${end - start} ms`);

// module.exports = addMatrices;
