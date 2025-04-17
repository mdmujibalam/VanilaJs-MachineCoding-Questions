const hamburgerElement = document.getElementById("hamburger-div");
const hamburgerItemsElement = document.getElementById("hamburgerItems");

hamburgerElement.addEventListener("click", () => {
  if (hamburgerItemsElement.style.display === "none") {
    hamburgerItemsElement.style.display = "block";
  } else {
    hamburgerItemsElement.style.display = "none";
  }
});
