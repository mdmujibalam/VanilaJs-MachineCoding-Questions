const hourHolder = document.getElementById("hours");
const minHolder = document.getElementById("mins");
const secHolder = document.getElementById("seconds");

window.addEventListener("load", () => {
  setInterval(() => {
    const now = new Date();

    let currHours = now.getHours();
    let currMins = now.getMinutes();
    let currSeconds = now.getSeconds();

    let hourRotationInDegree = (currHours % 12) * 30 + (currMins / 60) * 30;
    let minRotationInDegree = currMins * 6;
    let secondRotationInDegree = currSeconds * 6;

    hourHolder.style.transform = `rotate(${hourRotationInDegree}deg)`;
    minHolder.style.transform = `rotate(${minRotationInDegree}deg)`;
    secHolder.style.transform = `rotate(${secondRotationInDegree}deg)`;
  }, 1000);
});
