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
  month: 1,
  day: 0,
};

dayInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
  initialState.day = e.target.value;
});

monthInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
  initialState.month = e.target.value;
});

yearInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
  initialState.year = e.target.value;
});

const calculateAge = (dateOfBirth) => {
  const { day, month, year } = dateOfBirth;
  let result = [];

  // TODO: calculate year of age, month of age and date of age
  //  and return result array with this scheme => ['year', 'month', 'day']
  // your code here...
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error("Invalid Input");
  } else {
    let today = new Date();
    let birthDate = new Date(year, month - 1, day);

    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - 1 - birthDate.getMonth();
    let ageDay = today.getDate() - birthDate.getDate();

    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth = 12 + ageMonth;
    }

    // result[0] = ageYear;
    // result[1] = ageMonth;
    // result[2] = Math.abs(ageDay);
    result = [`${ageYear}`, `${ageMonth}`, `${Math.abs(ageDay)}`];
  }

  return result;
};

btn.addEventListener("click", () => {
  if (
    initialState.day &&
    initialState.month &&
    initialState.year &&
    initialState.month <= 12 &&
    initialState.day <= 31
  ) {
    let result = calculateAge(initialState);
    console.log(result);
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
