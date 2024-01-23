const string = "daadddg";

function findFirstNonRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // console.log(string.indexOf(char,i+1));
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "_";
}


console.log(findFirstNonRepeated(string));

// module.exports = findFirstNonRepeated;
