// you can use this data to test your function
// import data from "./data.json" assert { type: "json" };

const list = require("./data.json");

function filterList(data, model_numbers = []) {
  const keys = Object.entries(data);
  const box = [];

  for (let key of keys) {
    for (let x of key[1]) {
      for (let i = 0; i < model_numbers.length; i++) {
        if (model_numbers[i] === x.model_number) {
          box.push(x);
        }
      }
    }
  }

  if (box.length === 0) return "not found!";

  return box;
}

// console.log(filterList(data, ["A6F512", "R754F"]));
// console.log(filterList(data));

module.exports = filterList;
