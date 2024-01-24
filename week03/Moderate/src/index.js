// define a function that takes three sets of numbers as parameters
function moderate(arr1, arr2, arr3) {
  // concatenate the three sets of numbers and sort them in ascending order
  let arr = arr1.concat(arr2, arr3).sort((a, b) => a - b);
  // initialize the variables for average, median and mode
  let avg = 0, med = 0, mode = 0;
  // calculate the sum of the numbers
  let sum = arr.reduce((a, b) => a + b, 0);
  // calculate the average by dividing the sum by the total number
  avg = sum / arr.length;
  // find the middle index of the sorted array
  let mid = Math.floor(arr.length / 2);
  // if the total number is odd, the median is the middle number
  if (arr.length % 2 === 1) {
    med = arr[mid];
  }
  // if the total number is even, the median is the average of the middle two numbers
  else {
    med = (arr[mid - 1] + arr[mid]) / 2;
  }
  // create a map to store the frequency of each number
  let map = new Map();
  // loop through the array and update the map
  for (let num of arr) {
    // if the map already has the number, increment its frequency
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    }
    // otherwise, set the frequency to 1
    else {
      map.set(num, 1);
    }
  }
  // initialize the maximum frequency and the mode
  let maxFreq = 0; 
  // loop through the map and find the number with the highest frequency
  for (let [num, freq] of map) {
    // if the frequency is higher than the current maximum, update the mode and the maximum frequency
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }
  // return the average, median and mode as an object
  return {
    average: avg,
    median: med,
    mode: mode
  };
}


console.log(moderate([1,8,3],
  [9,4,1,2,3],
  [1]));

// module.exports = moderate;
