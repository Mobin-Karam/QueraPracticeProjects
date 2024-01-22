// you can use this data to test your function
import data from "./data.json" assert { type: "json" };

// const list = require("./data.json");

function filterList(data, model_numbers = []) {
  const box = [];

  for (let key in data) {
    for (let x of data[key]) {
      for (let i = 0; i < model_numbers.length; i++) {
        if (model_numbers[i] === x.model_number) {
          box.push(x);
        }
      }
    }
    // console.log(data[key]);
  }

  if (box.length === 0) return "not found!";

  return box;
}

console.log(filterList(data, ["A6F512", "R754F"]));
// console.log(filterList(data));

// module.exports = filterList;
