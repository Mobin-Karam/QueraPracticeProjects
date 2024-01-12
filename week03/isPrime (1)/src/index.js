function isPrime(num) {
  // TODO...
  if (num > 1 ? true : false) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}

module.exports = isPrime;
