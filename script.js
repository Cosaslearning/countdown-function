/* --------------- Countdown Function  --------------------- */
let day = document.getElementById("day");
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let endDate = new Date(2023, 0, 1, 00, 00);
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZero = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".headings"
    ).innerHTML = `<h1>Happy New Year</h1>`;
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1 style="font-size:6em;">2023</h1>`;

  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    day.textContent = addZero(daysLeft);
    hr.textContent = addZero(hrsLeft);
    min.textContent = addZero(minsLeft);
    sec.textContent = addZero(secsLeft);
  }
}

let i = setInterval(countdown, 1000);
countdown();

/* --------------- End Countdown Function  --------------------- */