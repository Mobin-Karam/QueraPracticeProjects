document.addEventListener("DOMContentLoaded", function () {});
let btn = document.getElementById("calculateBtn");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let result = document.getElementById("result");
btn.addEventListener("click", () => {
  if (
    height.value.replaceAll(" ", "") === "" &&
    weight.value.replaceAll(" ", "") === ""
  ) {
    result.textContent = "لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!";
  } else if ()
});
