let matrix1 = [
  [1, 2],
  [1, 2],

];
let matrix2 = [
  [3, 2],
  [5, 2],

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

// addMatrices(matrix1, matrix2,4);

console.log(addMatrices(matrix1, matrix2,2));

// module.exports = addMatrices;
