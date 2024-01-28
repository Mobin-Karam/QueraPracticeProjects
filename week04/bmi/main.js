document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("calculateBtn");
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let result = document.getElementById("result");

  // Button
  btn.addEventListener("click", () => {
    // Get inputs Value
    let A = Number(weight.value);
    let B = Math.pow(Number(height.value) / 100, 2);
    // Calculate BMI
    let BMI = (A / B).toFixed(2);
    // if INPUTS value empty
    if (
      height.value.replaceAll(" ", "") === "" ||
      weight.value.replaceAll(" ", "") === ""
    ) {
      result.textContent = `لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!`;
      // if inputs values less than 0 or equal to it
    } else if (Number(height.value) <= 0 || Number(weight.value) <= 0) {
      result.textContent = `لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!`;
      // for return correct text result to DOM
      // for BMI < 18.5
    } else if (BMI < 18.5) {
      result.textContent = `نتیحه تست شما : ${BMI} (کمبود وزن)`;
      // 18.5 <= BMI < 25
    } else if (BMI >= 18.5 && BMI < 25) {
      result.textContent = `نتیحه تست شما : ${BMI} (وزن سلامت)`;
      // 25 <= BMI < 30
    } else if (BMI >= 25 && BMI < 30) {
      result.textContent = `نتیحه تست شما : ${BMI} (اضافه وزن)`;
      // 30 <= BMI
    } else if (BMI >= 30) {
      result.textContent = `نتیحه تست شما : ${BMI} (چاقی)`;
    }
  });
});
