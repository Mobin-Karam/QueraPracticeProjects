// Change Numbers to Roman Numbers
function toRoman(number) {
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
  if (number > 0 && number <= 3000) {
    for (let name in romanToNum) {
      while (number >= romanToNum[name]) {
        // add Roman num
        roman += name;
        // increase Number that we give to function for measure it again
        number -= romanToNum[name];
      }
    }
  }
  return roman;
}
// console.log(toRoman(3000));
module.exports = toRoman;
