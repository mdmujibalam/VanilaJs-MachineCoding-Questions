const starFirst = document.getElementById("item1");
const starSecond = document.getElementById("item2");
const starThird = document.getElementById("item3");
const starFourth = document.getElementById("item4");
const starFifth = document.getElementById("item5");

starFirst.addEventListener("click", () => {
  for (let i = 1; i <= 1; i++) {
    const currStarElement = document.getElementById(`item${i}`);
    currStarElement.style.color = "yellow";
  }

  for (let i = 2; i <= 5; i++) {
    const currStarElement = document.getElementById(`item${i}`);
    currStarElement.style.color = "black";
  }
});

starSecond.addEventListener("click", () => {
  for (let i = 1; i <= 2; i++) {
    const currStarElement = document.getElementById(`item${i}`);
    currStarElement.style.color = "yellow";
  }

  for (let i = 3; i <= 5; i++) {
    const currStarElement = document.getElementById(`item${i}`);
    currStarElement.style.color = "black";
  }
});

starThird.addEventListener("click", () => {
  for (let i = 1; i <= 3; i++) {
    const currStarElement = document.getElementById(`item${i}`);
    currStarElement.style.color = "yellow";
  }

  for (let i = 4; i <= 5; i++) {
    const currStarElement = document.getElementById(`item${i}`);
    currStarElement.style.color = "black";
  }
});

starFourth.addEventListener("click", () => {
  for (let i = 1; i <= 4; i++) {
    const currStarElement = document.getElementById(`item${i}`);
    currStarElement.style.color = "yellow";
  }

  for (let i = 5; i <= 5; i++) {
    const currStarElement = document.getElementById(`item${i}`);
    currStarElement.style.color = "black";
  }
});

starFifth.addEventListener("click", () => {
  for (let i = 1; i <= 5; i++) {
    const currStarElement = document.getElementById(`item${i}`);
    currStarElement.style.color = "yellow";
  }
});
