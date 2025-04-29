const inputSecElement = document.getElementById("inputSec");

const hourElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secElement = document.getElementById("sec");

const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");

let seconds, intv;

window.addEventListener("load", () => {
  initializeTimer();
});

const initializeTimer = () => {
  hourElement.textContent = "00";
  minsElement.textContent = "00";
  secElement.textContent = "00";

  seconds = 0;
};

inputSecElement.addEventListener("change", (e) => {
  seconds = e.target.value;
});

submitBtn.addEventListener("click", () => {
  if (!seconds || seconds === 0) {
    initializeTimer();
    alert("Please enter countdown time in seconds !");
    return;
  }

  intv = setInterval(() => {
    if (seconds === 1) {
      clearInterval(intv);
      initializeTimer();
    }

    let currHours = Math.floor(seconds / 3600);
    let currMins = Math.floor(seconds / 60) - currHours * 60;
    let currSecs = seconds - currMins * 60 - currHours * 3600;

    hourElement.textContent = currHours.toString().padStart(2, "0");
    minsElement.textContent = currMins.toString().padStart(2, "0");
    secElement.textContent = currSecs.toString().padStart(2, "0");

    seconds--;
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(intv);
  initializeTimer();
});
