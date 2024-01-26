// define a function that takes three sets of numbers as parameters
function moderate(arr1, arr2, arr3) {
  let average = 0;
  let median = 0;
  let mode = 0;
  let middle = 0;

  // Average
  let totalArray = arr1.concat(arr2, arr3);
  for (let num of totalArray) {
    average += num;
  }
  average = Number((average / totalArray.length).toFixed(2));

  // Median
  if (totalArray.length % 2 === 0) {
    totalArray.sort((a, b) => a - b);
    middle = Math.floor(totalArray.length / 2);
    median = (totalArray[middle] + totalArray[middle - 1]) / 2;
  } else {
    totalArray.sort((a, b) => a - b);
    median = Math.floor(totalArray.length / 2);
  }

  // Mode
  totalArray.sort((a, b) => b - a);
  let frequency = {};
  let maxFrequency = 0;

  for (const number of totalArray) {
    frequency[number] = (frequency[number] || 0) + 1;
    if (frequency[number] > maxFrequency) {
      maxFrequency = frequency[number];
      mode = number;
    }
  }

  return {
    average: average,
    median: median,
    mode: mode,
  };
}

console.log(moderate([6], [4], []));

// module.exports = moderate;
