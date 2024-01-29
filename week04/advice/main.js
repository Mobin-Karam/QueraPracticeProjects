// import simulatedApi from "./server/server.js";

// const adviceContainer = document.querySelector(".advice");
// const heading = document.querySelector(".heading");
// const btn = document.querySelector(".btn");

// const generateAdvice = async () => {
//   // TODO: implement getting the data from api and return the given data
//   // API route: /advice
// };

// btn.addEventListener("click", async () => {
//   // TODO: call generateAdvice function
//   // and then place the id in "heading" and place the advice in "adviceContainer"
// });
import simulatedApi from "./server/server.js";

const adviceContainer = document.querySelector(".advice");
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

// const generateAdvice = () => {
//   simulatedApi.then((data) => {
//     if (data) {
//       return data;
//     } else {
//       console.error("Error: No data received");
//       return null;
//     }
//   });
// };

// btn.addEventListener("click", () => {
//   const advice = generateAdvice();
//   if (advice) {
//     heading.textContent = advice.id;
//     adviceContainer.textContent = advice.advice;
//   }
// });

const generateAdvice = async () => {
  const data = await simulatedApi;
  if (data) {
    return data;
  } else {
    console.error("Error: No data received");
    return null;
  }
};

console.log(generateAdvice());
btn.addEventListener("click", async () => {
  const advice = await generateAdvice();
  if (advice) {
    heading.textContent = `Advice #${advice.id}`;
    adviceContainer.textContent = advice.advice;
  }
});
