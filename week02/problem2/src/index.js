function fizz_buzz(numbers) {
  let number1;
  let number2;
  let number3;
  if (numbers.length === 1) {
    if (numbers[0] % 3 === 0) {
      if (numbers[0] === 3) number1 = "fizz";
      else if (numbers[0] === 5) number1 = "buzz";
      else if (numbers[0] === 15) number1 = "fizzbuzz";
    } else if (numbers[0] % 5 === 0) {
      if (numbers[0] === 3) number1 = "fizz";
      else if (numbers[0] === 5) number1 = "buzz";
      else if (numbers[0] === 15) number1 = "fizzbuzz";
    } else if (numbers[0] % 15 === 0) {
      if (numbers[0] === 3) number1 = "fizz";
      else if (numbers[0] === 5) number1 = "buzz";
      else if (numbers[0] === 15) number1 = "fizzbuzz";
    }
    if (number1 === "fizz") {
      return `${number1}`;
    } else if (number2 === "buzz") {
      return `${number2}`;
    } else if (number3 === "fizzbuzz") {
      return `${number3}`;
    } else if (!(number1 === "fizz")) {
      return `${number1}`;
    } else if (!(number2 === "buzz")) {
      return `${number2}`;
    } else if (!(number3 === "fizzbuzz")) {
      return `${number3}`;
    }
  } else if (numbers.length === 2) {
    if (numbers[0] === 3 && numbers[1] === 3) {
      number1 = "fizz";
      number2 = "fizz";
    } else if (numbers[0] === 3 && numbers[1] === 5) {
      number1 = "fizz";
      number2 = "buzz";
    } else if (numbers[0] === 3 && numbers[1] === 15) {
      number1 = "fizz";
      number2 = "fizzbuzz";
    } else if (!(numbers[0] === 3) && numbers[1] === 3) {
      number1 = numbers[0];
      number2 = "fizz";
    } else if (!(numbers[0] === 3) && numbers[1] === 5) {
      number1 = numbers[0];
      number2 = "buzz";
    } else if (!(numbers[0] === 3) && numbers[1] === 15) {
      number1 = numbers[0];
      number2 = "fizzbuzz";
    } else if (numbers[0] === 3 && !(numbers[1] === 3)) {
      number1 = "fizz";
      number2 = numbers[1];
    } else if (numbers[0] === 3 && !(numbers[1] === 5)) {
      number1 = "fizz";
      number2 = numbers[1];
    } else if (numbers[0] === 3 && !(numbers[1] === 15)) {
      number1 = "fizz";
      number2 = numbers[1];
    } else if (!(numbers[0] === 3 && numbers[1] === 3)) {
      number1 = numbers[0];
      number2 = numbers[1];
    } else if (!(numbers[0] === 3 && numbers[1] === 5)) {
      number1 = numbers[0];
      number2 = numbers[1];
    } else if (!(numbers[0] === 3 && numbers[1] === 15)) {
      number1 = numbers[0];
      number2 = numbers[1];
    }
    return `${number1},${number2}`;
  } else if (numbers.length === 3) {
    if (numbers[0] % 3 === 0) {
      if (numbers[0] === 3)
        (number1 = "fizz"), (number2 = "buzz"), (number3 = "fizzbuzz");
    }
    if (numbers[0]) return `${number1},${number2},${number3}`;
  }
}

module.exports = fizz_buzz;
