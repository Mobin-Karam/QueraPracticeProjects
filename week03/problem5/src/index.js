// let num = [24];
let primes = [2, 3, 5, 7, 11];
let result = [];

function findPrimes(num) {
  for (i = 0; i < primes.length; i++) {
    if (num % primes[i] === 0) {
      result.push( primes[i]);
    }
  }

  return result;
}

console.log(findPrimes(100));

// module.exports = findPrimes;
