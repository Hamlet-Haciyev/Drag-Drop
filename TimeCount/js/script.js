let yearResult = document.getElementById("year-result");
let dayResult = document.getElementById("day-result");
let hoursResult = document.getElementById("hours-result");
let minuteResult = document.getElementById("minute-result");
let secondResult = document.getElementById("second-result");

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let yearEl = document.getElementById("year").value;
  let monthEl = document.getElementById("month").value;
  let dayEl = document.getElementById("day").value;

  let date = new Date(yearEl, monthEl, dayEl);

  let nowDate = new Date();

  let totalSecond = (nowDate - date) / 1000;

  let year = Math.floor(totalSecond / 3600 / 24 / 30 / 12);
  let days = Math.floor(totalSecond / 3600 / 24) % 365;
  let hours = Math.floor(totalSecond / 3600) % 24;

  let minutes = Math.floor(totalSecond / 60) % 60;
  let seconds = Math.floor(totalSecond) % 60;

  yearResult.innerText = year;
  dayResult.innerText = days;
  hoursResult.innerText = hours;
  minuteResult.innerText = minutes;
  secondResult.innerText = seconds;
});
