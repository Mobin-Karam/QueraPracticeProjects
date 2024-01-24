function filterByTerm(inputArr, searchTerm) {
  // Save Position of SearchTerm
  let pos;
  // Save Result and Return it
  let result = [];
  // loop around inputArr and find searchTerm
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].url.indexOf(searchTerm)) {
      pos = inputArr[i].url.indexOf(searchTerm.toLowerCase());
      if (pos > 0) {
        result.push(inputArr[i]);
      }
    }
  }

  return result;
}

// console.log(
//   filterByTerm(
//     [
//       { id: 1, url: "https://www.url1.dev" },
//       { id: 2, url: "https://www.link2.dev" },
//       { id: 3, url: "https://www.link3.dev" },
//     ],
//     "LINK"
//   )
// );

module.exports = filterByTerm;
