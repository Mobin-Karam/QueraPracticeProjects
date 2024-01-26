
// Change Numbers to Roman Numbers
function toRoman(num) {
  // List of Roman Numbers
  let romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let key in romanToNum) {
    while (num >= romanToNum[key]) {
      // add Roman num
      roman += key;
      // increase Number that we give to function for measure it again
      num -= romanToNum[key];
    }
  }
  return roman;
}

// console.log(toRoman(1495));

// console.log(1495);

module.exports = toRoamn;
