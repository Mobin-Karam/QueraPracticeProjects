// use this tasks to test your code
const tasks = [
  {
    id: 1,
    title: "buy for dinner",
    description: "buy a bread for dinner",
    date: "2024-01-29T06:00:00Z",
  },
  {
    id: 2,
    title: "bootcamp meeting",
    description: "join bootcamp general meeting",
    date: "2024-02-16T18:30:00Z",
  },
  {
    id: 3,
    title: "bug fix",
    description: "fix a reported bug from a client",
    date: "2023-11-23T08:08:00Z",
  },
  {
    id: 4,
    title: "tickets",
    description:
      "book two tickets for Harry Potter and the Prisoner of Azkaban movie",
    date: "2024-05-01T12:50:00Z",
  },
];

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
            result.push(`wait for it : ${data[x].title}`);
          } else if (diffHours < 3 && diffHours >= 0) {
            result.push(`just do it : ${data[x].title}`);
          } else if (diffHours < 0) {
            result.push(`too late : ${data[x].title}`);
          }
        } else if (date > date2) {
          result.push(`too late : ${data[x].title}`);
        } else if (date < date2) {
          result.push(`wait for it : ${data[x].title}`);
        }
      } else if (month > month2) {
        result.push(`too late : ${data[x].title}`);
      } else if (month < month2) {
        result.push(`wait for it : ${data[x].title}`);
      }
    } else if (year > year2) {
      result.push(`too late : ${data[x].title}`);
    } else if (year < year2) {
      result.push(`wait for it : ${data[x].title}`);
    }
  }

  return result;
}

// console.log(reminder(tasks, currentDate));

module.exports = reminder;
