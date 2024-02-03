// Build isPrime Function
// Write a function called isPrime that checks if a given number is prime.
// The function should return true if the number is prime, and false otherwise.
// Confirm that your function is correct by testing it with a variety of numbers,

function isPrime(n) {
  if ((n % 2 === 0 && n % Math.sqrt(n) === 0) ) return true;
  return false;
}

console.log(isPrime(3));
