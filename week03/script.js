// Test Data
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);

console.log(menu);

let obj1 = { a: "mobin", b: "lok", d: "karam" };
let obj2 = { a: "mobn", b: "lok", p: "kara" };

function objEquality(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  let result;

  if (key1.length === key2.length) {
    for (let i of key1) {
      result = obj1[i] === obj2[i];
      console.log(obj1[i] === obj2[i]);
    }
    return result;
  }

  return false;
}

console.log(objEquality(obj1, obj2));
