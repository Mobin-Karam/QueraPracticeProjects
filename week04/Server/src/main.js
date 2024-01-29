// use request function to send a fake request to a server
const request = require("./request.js");

async function checkPerformance(requestCount) {
  let successTimes = [];
  let failureTimes = [];
  for (let i = 0; i < requestCount; i++) {
    try {
      const time = await request();
      successTimes.push(time);
    } catch (time) {
      failureTimes.push(time);
    }
  }
  let successAverage =
    successTimes.reduce((a, b) => a + b, 0) / successTimes.length || 0;
  let failureAverage =
    failureTimes.reduce((a, b) => a + b, 0) / failureTimes.length || 0;
  let performance = (successTimes.length / requestCount) * 100;
  return { successAverage, failureAverage, performance };
}

// checkPerformance(11)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

module.exports = checkPerformance;
