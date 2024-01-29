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
  initialState.day = e.target.value;
});

monthInput.addEventListener("change", (e) => {
  initialState.month = e.target.value;
});

yearInput.addEventListener("change", (e) => {
  initialState.year = e.target.value;
});

const calculateAge = (dateOfBirth) => {
  const { day, month, year } = dateOfBirth;
  const result = [];

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
    m += 12;
  }

  let months = m;
  let days = today.getDate() - birthDate.getDate();
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  result.push(age.toString(), months.toString(), days.toString());

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
    const result = calculateAge(initialState);
    yearsResult.textContent = result[0];
    monthsResult.textContent = result[1];
    daysResult.textContent = result[2];
  } else {
    errorContainer.textContent = "Please enter a valid date.";
  }
});
