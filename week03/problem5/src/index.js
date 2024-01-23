function findPrimes(num) {
  // Save Result in this Array
  let result = [];
  // Check the number is Prime or not
  const isPrime = (number) => {
    // Check if number less than 2 remove it
    if (number < 2) {
      return false;
    }
    // Check number is't Prime
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    // Number is Prime
    return true;
  };
  // Push that Num is Divisible to 
  for (i = 2; i < num; i++) {
    if (isPrime(i) && num % i === 0) {
      result.push(i);
    }
  }

  return result;
}

// console.log(findPrimes(24));

module.exports = findPrimes;
