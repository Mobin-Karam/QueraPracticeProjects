function MinToMax(arr) {
  // YOUR CODE HERE
}

function MaxToMin(arr) {
  // YOUR CODE HERE
}


function ASCisNotDESC(data) {
  const minToMaxSorted = MinToMax(data);
  const maxToMinSorted = MaxToMin(minToMaxSorted);

  return (minToMaxSorted?.length && maxToMinSorted?.length) && JSON.stringify(minToMaxSorted) !== JSON.stringify(maxToMinSorted);
}

// expect return of ASCisNotDESC function to be True
// ascending sorted array (1,3,8,9) is not equal to ascending sorted array (9,8,3,1)
// use this data to test your function
const unsortedArray = [5, 32, 1, 3, 4, 2, 9, 6, 50, 1, 8, 5, 100];

console.log(ASCisNotDESC(unsortedArray));


module.exports = { MinToMax, MaxToMin, ASCisNotDESC }
