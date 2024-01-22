function arrayEquality(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  else {
    // Comparing each element of your array
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i].length !== arr2[i].length) {
        return false;
      } else {
        for (var j = 0; j < arr1[i].length; j++) {
          if (arr1[i][j] !== arr2[i][j]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}

const obj1 = { a: "mobin", b: { age: 1 } };
const obj2 = { a: "mobin", b: { age: 1 } };

function objectEquality(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObject(val1) && isObject(val2);

    if (
      (areObjects && !objectEquality(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

function isObject(obj) {
  return obj != null && typeof obj === "object";
}

module.exports = { arrayEquality, objectEquality };
// console.log(
//   arrayEquality(
//     [
//       [1, 2],
//       [1, 2],
//     ],
//     [
//       [1, 2],
//       [1, 2],
//     ]
//   ),
//   objectEquality(obj1, obj2)
// );
