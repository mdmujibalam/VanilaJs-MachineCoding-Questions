const bodyContainer = document.getElementById("body-container");

const toogleBtn = document.getElementById("toogle-theme");

const cardElement = document.querySelector(".card");
const titleElement = document.querySelector(".title");
const descElement = document.querySelector(".desc");

(() => {
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme == null) {
    localStorage.setItem("theme", "light");
    bodyContainer.classList.add("light");
    cardElement.classList.add("light");
    titleElement.classList.add("light");
    descElement.classList.add("light");
  }

  if (currentTheme === "dark") {
    bodyContainer.classList.add("dark");
    cardElement.classList.add("dark");
    titleElement.classList.add("dark");
    descElement.classList.add("dark");
  }
})();

toogleBtn.addEventListener("click", () => {
  console.log("Toogle Button Clicked !!!");

  bodyContainer.classList.toggle("dark");

  if (bodyContainer.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  cardElement.classList.toggle("dark");
  titleElement.classList.toggle("dark");
  descElement.classList.toggle("dark");
});
