const tempInC = document.getElementById("tempInC");
const submitButton = document.getElementById("btn");
const tempInF = document.getElementById("tempInF");

let temp = "";

tempInC.addEventListener("change", (e) => {
  temp = e.target.value;
});

submitButton.addEventListener("click", () => {
  if (temp === "") tempInF.textContent = "Above field is empty";
  else {
    const val = parseInt(temp);
    const convertedTempInF = 32 + (9 * val) / 5;

    tempInF.textContent = `Temperature in Farenheit is ${convertedTempInF.toString()}`;
  }
});
