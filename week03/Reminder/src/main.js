// use this tasks to test your code
import tasks from "./data.json" assert { type: "json" };

const currentDate = "2024-01-15T18:00:00Z";

function reminder(data, currentDate) {
  let nowDate = new Date(currentDate);
  let [year, month, date, hours] = [
    nowDate.getUTCFullYear(),
    nowDate.getUTCMonth(),
    nowDate.getUTCDate(),
    nowDate.getUTCHours(),
  ];

  let result = [];
  for (let x = 0; x < data.length; x++) {
    let newDate = new Date(Date.parse(data[x].date));
    let [year2, month2, date2, hours2] = [
      newDate.getUTCFullYear(),
      newDate.getUTCMonth(),
      newDate.getUTCDate(),
      newDate.getUTCHours(),
    ];

    // Set Difference Between Same Days
    let diffHours = hours2 - hours;

    // Make condition for push data to result
    // if year equal to year2 go ahead
    if (year === year2) {
      if (month === month2) {
        if (date === date2) {
          // if Difference of Hours
          if (diffHours >= 3) {
            result.push(`Wait for it: ${data[x].title}`);
          } else if (diffHours < 3 && diffHours >= 0) {
            result.push(`Just do it: ${data[x].title}`);
          } else if (diffHours < 0) {
            result.push(`To late: ${data[x].title}`);
          }
        } else if (date > date2) {
          result.push(`To late: ${data[x].title}`);
        } else if (date < date2) {
          result.push(`Wait for it: ${data[x].title}`);
        }
      } else if (month > month2) {
        result.push(`To late: ${data[x].title}`);
      } else if (month < month2) {
        result.push(`Wait for it:${data[x].title}`);
      }
    } else if (year > year2) {
      result.push(`To late: ${data[x].title}`);
    } else if (year < year2) {
      result.push(`Wait for it: ${data[x].title}`);
    }
  }

  return result;
}

console.log(reminder(tasks, currentDate));

export default reminder;
