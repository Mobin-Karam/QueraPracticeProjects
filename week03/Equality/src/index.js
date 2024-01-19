function  arrayEquality(arr1, arr2) {
  if(arr1 === arr2) {
      return true;
  } else {
      return false;
  }
}

function objectEquality (obj1, obj2) {
  if(obj1 === obj2) {
      return true;
  } else {
      return false;
  }
}

console.log(arrayEquality(),objectEquality())

// module.exports = {arrayEquality, objectEquality}