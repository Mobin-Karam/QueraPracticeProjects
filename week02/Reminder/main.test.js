const { reminder, currentDate } = require("./src/main.js");
const tasks = require("./src/data.json");

test(`CurrentDate is ${currentDate} and Tasks for Todo is :${tasks[1][2]}`, () => {
  expect(reminder(tasks, currentDate)).toBe(reminder());
});
