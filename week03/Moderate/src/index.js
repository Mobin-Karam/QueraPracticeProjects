// define a function that takes three sets of numbers as parameters
// function moderate(arr1, arr2, arr3) {
//   let totalArray = arr1.concat(arr2, arr3);
//   let average = 0;
//   let median = 0;
//   let mode = 0;
//   let middle = 0;
//   // Median
//   if (totalArray.length % 2 === 0) {
//     totalArray.sort((a, b) => a - b);
//     middle = Math.floor(totalArray.length / 2);
//     median = (totalArray[middle] + totalArray[middle - 1]) / 2;
//   } else {
//     totalArray.sort((a, b) => a - b);
//     median = Math.floor(totalArray.length / 2);
//   }
//   // Average
//   for (let num of totalArray) {
//     average += num;
//   }
//   average = Number((average / totalArray.length).toFixed(2));
//   // Mode
//   totalArray.sort((a, b) => b - a);
//   let frequency = {};
//   let maxFrequency = 0;

//   for (const number of totalArray) {
//     frequency[number] = (frequency[number] || 0) + 1;
//     if (frequency[number] > maxFrequency) {
//       maxFrequency = frequency[number];
//       mode = number;
//     }
//   }

//   return {
//     average: average,
//     median: median,
//     mode: mode,
//   };
// }

// console.log(moderate([6], [4], []));
function moderate(arr1, arr2, arr3) {
  // Filter out non-numeric elements//
  let numbers = arr1.concat(arr2, arr3);

  // Calculate the average
  const sum = numbers.reduce((a, b) => a + b, 0);
  const avg = sum / numbers.length;

  // Calculate the median
  let sortNumbers = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortNumbers.length / 2);
  const median =
    sortNumbers.length % 2 === 0
      ? (sortNumbers[middle - 1] + sortNumbers[middle]) / 2
      : sortNumbers[middle];

  // Calculate the mode
  const frequency = {};
  let maxFrequency = 0;
  let mode = null;

  for (const number of numbers) {
    frequency[number] = (frequency[number] || 0) + 1;
    if (frequency[number] > maxFrequency) {
      maxFrequency = frequency[number];
      mode = number;
    }
  }

  return {
    average: avg,
    median: median,
    mode: mode,
  };
}
console.log(moderate([6], [4], []));

// module.exports = moderate;
