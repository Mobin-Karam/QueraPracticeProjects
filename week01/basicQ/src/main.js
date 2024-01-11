const textData = [
  "فرصت‌ها اتفاق نمی‌افتند، شما خالق آنها هستید.",
  "رؤیاهای‌ خودتان را بسازید در غیر این صورت فرد دیگری شما را برای ساختن رؤیایش به کار خواهد گرفت.",
  "من به ضرورتِ اقدام، معتقدم. دانستن کافی نیست، باید دانسته‌هایمان را به کار ببریم. خواستن کافی نیست، باید کاری انجام بدهیم.",
  "موفقیت خود را به این نسبت می‌دهم که من هرگز نه بهانه آوردم و نه بهانه‌ای را پذیرفتم.",
  "روشن و قطعی بودن هدف نقطه‌ی شروع تمام موفقیت‌هاست.",
  "هیچ چیز غیرممکن نیست، این کلمه خودش می‌گوید من ممکن هستم.",
  "موفقیت، مجموعه‌ای از تلاش‌های کوچک است که هر روز و هر روز تکرار شده‌اند.",
];

const changedTemp = (text) => {
  return `
        <p class="paragraph">${text}</p>
    `;
};

const setEvents = () => {
  document.querySelector("#welcome-btn").addEventListener("click", handleClick);
  document
    .querySelector("#close-btn")
    .addEventListener("click", handleCloseBtnClick);
};

const selectRandomText = (texts) => {
  const num = Math.floor(Math.random() * texts.length);
  return texts[num];
};

const handleClick = () => {
  const randomText = selectRandomText(textData);
  document.querySelector("#main").innerHTML = changedTemp(randomText);
  document.querySelector("#close-btn").style.display = "block";
};

const handleCloseBtnClick = () => {
  document.querySelector("#main").innerHTML = `
         <p class="paragraph">برای شروع مسیر کلیک کنید.</p>
         <button id="welcome-btn" class="button">روی من کلیک کن !</button>
    `;
  document.querySelector("#close-btn").style.display = "none";
  document.querySelector("#welcome-btn").addEventListener("click", handleClick);
};

const init = () => {
  setEvents();
};

init();
