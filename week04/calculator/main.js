// document.addEventListener("DOMContentLoaded", () => {
//   let display = document.getElementById("display");
//   let calculateBtn = document.querySelectorAll("button");
//   display.value = "0";
//   let displayVal = "";
//   let calc = 0;
//   let sum = 0;
//   let sub = 0;
//   let mult = 0;
//   let division = 0;
//   let fNum = 0;
//   let sNum = 0;

//   // Funtion For add Element to display
//   function calculateSum(number) {
//     sum += number;
//     return sum;
//   }

//   // Funtion For add Element to display
//   function calculateSub(number) {
//     sub -= number;
//     return sub;
//   }

//   // Funtion For add Element to display
//   function calculateMult(number) {
//     mult *= number;
//     return mult;
//   }

//   // Funtion For add Element to display
//   function calculateDivision(number) {
//     if (fNum === 0) fNum = number;
//     else {
//       sNum = number;
//     }
//     division = fNum / sNum;
//     console.log(fNum);
//     return division;
//   }

//   // Loop over calculator Buttons
//   for (let i = 0; i < calculateBtn.length; i++) {
//     const element = calculateBtn[i];

//     // Add addEventListener to all Calc Buttons
//     calculateBtn[i].addEventListener("click", () => {
//       // Result
//       if (element.textContent === "=") {
//         display.value = calculateSum(Number(displayVal));

//         // Clear
//       } else if (element.textContent === "C") {

//         display.value = "0";
//         displayVal = "";
//         sum = 0;

//         // Sum
//       } else if (element.textContent === "+") {
//         calculateSum(Number(displayVal));
//         displayVal = "";

//         // Mult
//       } else if (element.textContent === "*") {
//         calculateMult(Number(displayVal));
//         displayVal = "";

//         // Sub
//       } else if (element.textContent === "-") {
//         calculateSub(Number(displayVal));
//         displayVal = "";

//         // Division
//       } else if (element.textContent === "/") {
//         calculateDivision(Number(displayVal));
//         displayVal = "";

//         // Default
//       } else {
//         displayVal += element.textContent;
//         // Don't repeat Zero for first number
//         if (displayVal[0] === "0") {
//           display.value = "0";
//           displayVal = "";
//         } else {
//           display.value = displayVal;
//         }
//       }
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  display.value = "0";
  let buttons = Array.from(document.querySelectorAll(".buttons button"));
  let operator = "";
  let value = "";
  let result = "";
  buttons.map((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.className === "operator") {
        operator = e.target.textContent;
        value = display.value;
        display.value = "";
      } else if (e.target.textContent === "C") {
        display.value = "0";
        value = "";
        operator = "";
        result = "";
      } else if (e.target.textContent === "=") {
        switch (operator) {
          case "+":
            result = parseFloat(value) + parseFloat(display.value);
            break;
          case "-":
            result = parseFloat(value) - parseFloat(display.value);
            break;
          case "*":
            result = parseFloat(value) * parseFloat(display.value);
            break;
          case "/":
            try {
              if (display.value === "0") {
                throw new Error("Error: Division by zero");
              } else {
                result = parseFloat(value) / parseFloat(display.value);
              }
            } catch (e) {
              result = "Error";
            }
            break;
          default:
            result = "Error";
        }
        display.value = result.toString();
        value = "";
        operator = "";
      } else {
        if (display.value === "0") {
          display.value = e.target.textContent;
        } else {
          display.value += e.target.textContent;
        }
      }
    });
  });
});
