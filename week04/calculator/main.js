document.addEventListener("DOMContentLoaded", () => {
  let display = document.getElementById("display");
  let calculateBtn = document.querySelectorAll("button");
  display.value = "0";
  let displayVal = "";
  let memoriez = [];

  for (let i = 0; i < calculateBtn.length; i++) {
    const element = calculateBtn[i];

    // Funtion For add Element to display
    function calculateSum(...calc) {}

    // Add AddEvent listener to all Calc Buttons
    calculateBtn[i].addEventListener("click", () => {
      if (element.textContent === "=") {
      } else if (element.textContent === "C") {
        display.value = "0";
        displayVal = "";
      } else if (element.textContent === "+") {
        memoriez.push(display.value);
        calculateSum(element);
      } else {
        displayVal += element.textContent;
        if (displayVal[0] === "0") {
          display.value = "0";
          displayVal = "";
        } else {
          display.value = displayVal;
        }
        console.log(displayVal);
      }
    });
  }

  console.log(memoriez);
});

let arrays = [
  [1, 6, 3, 4, 9],
  [1, 7, 7, 8, 5],
  [6, 2, 3, 4, 5],
  [8, 2, 7, 4, 4],
  [3, 6, 3, 4, 3],
];

let calc = 0;
for (let arr of arrays) {
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // calculateSum(arr[i]);
  }
}
// console.log(calc);
