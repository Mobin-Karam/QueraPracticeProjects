const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const btn = document.getElementById("submit__btn");
const yearsResult = document.getElementById("date__years--result");
const monthsResult = document.getElementById("date__months--result");
const daysResult = document.getElementById("date__days--result");
const errorContainer = document.querySelector(".error");

const initialState = {
  year: 0,
  month: 0,
  day: 0,
};

dayInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
});

monthInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
});

yearInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
});

const calculateAge = (dateOfBirth) => {
  const { day, month, year } = dateOfBirth;
  const result = [];

  // TODO: calculate year of age, month of age and date of age
  //  and return result array with this scheme => ['year', 'month', 'day']
  // your code here...
};

btn.addEventListener("click", () => {
  if (
    initialState.day &&
    initialState.month &&
    initialState.year &&
    initialState.month <= 12 &&
    initialState.day <= 31
  ) {
    const result = calculateAge(initialState);
    yearsResult.textContent = result[0];
    monthsResult.textContent = result[1];
    daysResult.textContent = result[2];
  } else {
    errorContainer.innerHTML = `<p>Input is invalid!</p>`;
    errorContainer.style.setProperty("display", "block");
    setTimeout(() => {
      errorContainer.style.setProperty("display", "none");
    }, 1500);
  }
});
