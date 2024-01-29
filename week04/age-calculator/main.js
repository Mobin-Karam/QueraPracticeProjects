// const dayInput = document.getElementById("dayInput");
// const monthInput = document.getElementById("monthInput");
// const yearInput = document.getElementById("yearInput");
// const btn = document.getElementById("submit__btn");
// const yearsResult = document.getElementById("date__years--result");
// const monthsResult = document.getElementById("date__months--result");
// const daysResult = document.getElementById("date__days--result");
// const errorContainer = document.querySelector(".error");

// const initialState = {
//   year: 0,
//   month: 0,
//   day: 0,
// };

// dayInput.addEventListener("change", (e) => {
//   initialState.day = e.target.value;
// });

// monthInput.addEventListener("change", (e) => {
//   initialState.month = e.target.value;
// });

// yearInput.addEventListener("change", (e) => {
//   initialState.year = e.target.value;
// });

// // CalculateAge
// const calculateAge = (dateOfBirth) => {
//   const birthDate = new Date(dateOfBirth);
//   const currentDate = new Date();

//   let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
//   let ageMonth = currentDate.getMonth() - birthDate.getMonth();
//   let ageDay = currentDate.getDate() - birthDate.getDate();

//   if (ageDay < 0) {
//     ageMonth--;
//     ageDay += new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       0
//     ).getDate();
//   }

//   if (ageMonth < 0) {
//     ageYear--;
//     ageMonth += 12;
//   }

//   // Return as an array
//   return [ageYear, ageMonth, ageDay];
// };

// // Button
// btn.addEventListener("click", () => {
//   if (!initialState.day || !initialState.month || !initialState.year) {
//     errorContainer.textContent = "input is invalid!";
//     errorContainer.style.display = "block";
//     return;
//   }

//   errorContainer.style.display = "none";

//   const dateOfBirth = `${initialState.year}-${initialState.month}-${initialState.day}`;
//   const age = calculateAge(dateOfBirth);

//   yearsResult.textContent = age[0];
//   monthsResult.textContent = age[1];
//   daysResult.textContent = age[2];
// });

/// =============================
const btn_output = document.getElementById("submit__btn");
const day_input = document.getElementById("dayInput");
const month_input = document.getElementById("monthInput");
const year_input = document.getElementById("yearInput");

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const month_output = document.getElementById("date__month--result");
const day_output = document.getElementById("date__day--result");
const year_output = document.getElementById("date__year--result");

// Current Year - year input value = years lived
// current month - month input value = months lived
// Current day - day input value = days lived
// if the current month < month input value then do current month - month input value + 12
// If the current day < day input value then do currentday - dayinput value + 7

//  Timeout function to set the input back to normal state
function timeout(param) {
  param.className = "form-control p-2 p-lg-2";
  param.previousElementSibling.style.color = "var(--Smokeygrey)";
  param.classList.remove("border-danger");

  // check for existing error message to completely remove error message when timeout is reached
  const existingErrMsg = param.parentElement.querySelector(".err-msg");
  if (existingErrMsg) {
    existingErrMsg.remove();
  }
}

//  Show border function to create borders around input
function showBorder(param) {
  param.parentElement.children[0].style.color = "var(--Lightred)";
  param.className = "border border-1 border-danger rounded-2 p-2 p-lg-2";
  setTimeout(() => timeout(param), 3000);
}

//  Set the content to --
function showNoContent() {
  day_output.textContent = "--";
  month_output.textContent = "--";
  year_output.textContent = "--";
}

btn_output.addEventListener("click", () => {
  //  Change background color of button
  btn_output.style.backgroundColor = "var(--offblack)";
  setTimeout(() => {
    btn_output.style.backgroundColor = "var(--Purple)";
  }, 3000);
  showNoContent();
  const getYearsLived = currentYear - year_input.value;
  let getDaysLived = parseInt(currentDate - day_input.value);
  let getMonthsLived = parseInt(currentMonth - month_input.value);

  //  Checks if the ages are zero values and sets them to zero
  if (getDaysLived == 0 || getYearsLived == 0 || getMonthsLived == 0) {
    console.log("They are equal to zero");
    month_output.textContent = "0";
    year_output.textContent = "0";
    day_output.textContent = "0";
  }
  //  Checks if the month lived and day lived are less than 0 and adds 12 to months and 7 to the days
  if (getMonthsLived < 0 && month_input.value <= 12) {
    getMonthsLived += 12;
  }
  if (getDaysLived < 0 && day_input.value <= 31) {
    getDaysLived += 7;
  }

  // ------- Intervals for the count up animation--------
  let yearId = setInterval(yearFrame, 120);
  let monthId = setInterval(monthFrame, 130);
  let dayId = setInterval(dayFrame, 140);
  let yearNum = 0;
  let monthNum = 0;
  let dayNum = 0;

  //   Frame. Checks for conditions and sets the  output to text content
  function yearFrame() {
    if (yearNum == getYearsLived) {
      clearInterval(yearId);
    } else {
      yearNum++;
      year_output.textContent = yearNum;
    }
  }

  function monthFrame() {
    if (monthNum == getMonthsLived) {
      clearInterval(monthId);
    } else {
      monthNum++;
      console.log(monthNum);
      month_output.textContent = monthNum;
    }
  }

  function dayFrame() {
    if (dayNum == getDaysLived) {
      clearInterval(dayId);
    } else {
      dayNum++;
      day_output.textContent = dayNum;
    }
  }

  //  CLear all Intervals
  function clearAllIntervals() {
    clearInterval(dayId);
    clearInterval(monthId);
    clearInterval(yearId);
  }

  // year_output.textContent = getYearsLived;

  // Check for empty inputs
  if (year_input.value == "") {
    clearAllIntervals();
    showNoContent();
    showBorder(year_input);
    const err_msg = document.createElement("p");
    console.log(year_input.parentElement);
    year_input.parentElement.style.position = "relative";
    year_input.parentElement.append(err_msg);
    err_msg.className = "err-msg";
    err_msg.textContent = "This field is required";
  }
  if (month_input.value == "") {
    const err_msg = document.createElement("p");
    clearAllIntervals();
    showNoContent();
    showBorder(month_input);
    month_input.parentElement.style.position = "relative";
    month_input.parentElement.append(err_msg);
    err_msg.className = "err-msg";
    err_msg.textContent = "This field is required";
  }
  if (day_input.value == "") {
    const err_msg = document.createElement("p");
    clearAllIntervals();
    showNoContent();
    showBorder(day_input);
    day_input.parentElement.style.position = "relative";
    day_input.parentElement.append(err_msg);
    err_msg.className = "err-msg";
    err_msg.textContent = "This field is required";
  }

  //  Check for invalid input values

  function checkValidInputs() {
    if (
      day_input.value > 31 ||
      (day_input.value < 1 && day_input.value != "")
    ) {
      const err_msg = document.createElement("p");
      day_input.parentElement.style.position = "relative";
      day_input.parentElement.append(err_msg);
      err_msg.className = "err-msg";
      err_msg.textContent = "Must be a valid day";
      clearAllIntervals();
      showBorder(day_input);
      showNoContent();
      day_output.textContent = "--";
    }
    if (month_input.value > 12 && month_input.value !== "") {
      const err_msg = document.createElement("p");
      clearAllIntervals();
      month_input.parentElement.style.position = "relative";
      month_input.parentElement.append(err_msg);
      err_msg.className = "err-msg";
      err_msg.textContent = "Must be a valid month";
      showBorder(month_input);
      showNoContent();
      month_output.textContent = "--";
    }

    if (year_input.value > currentYear && year_input.value != "") {
      showNoContent();
      clearAllIntervals();
      const err_msg = document.createElement("p");
      year_input.parentElement.style.position = "relative";
      year_input.parentElement.append(err_msg);
      err_msg.className = "err-msg";
      err_msg.textContent = "Must be in the past";
      showBorder(year_input);
    }

    // Using numbers to represent months with thirty days
    const thirtydaymonths = ["4", "6", "11", "9"];

    // Checks for months that have only thirty days and february
    thirtydaymonths.forEach((thirtydaymonth) => {
      if (
        (month_input.value == thirtydaymonth && day_input.value > 30) ||
        (month_input.value == 2 && day_input.value > 29)
      ) {
        const err_msg = document.createElement("p");
        day_input.parentElement.style.position = "relative";
        day_input.parentElement.append(err_msg);
        err_msg.className = "err-msg";
        err_msg.textContent = "Must be a valid date";
        showBorder(day_input);
        showBorder(month_input);
        showBorder(year_input);
        showNoContent();
        clearAllIntervals();
      }
    });
  }
  checkValidInputs();
});
