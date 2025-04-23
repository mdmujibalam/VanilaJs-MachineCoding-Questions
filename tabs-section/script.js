/*const tabFirst = document.getElementById("item1");
const tabSecond = document.getElementById("item2");
const tabThird = document.getElementById("item3");
const tabFourth = document.getElementById("item4");
const tabFifth = document.getElementById("item5");
const contentSection = document.getElementById("content-section");

function assignTabName() {
  for (let i = 1; i <= 5; i++) {
    const currEle = document.getElementById(`item${i}`);
    currEle.textContent = `Tab ${i}`;
  }
}

function resetBorder() {
  for (let i = 1; i <= 5; i++) {
    const currElement = document.getElementById(`item${i}`);
    currElement.style.border = "1px solid black";
  }
}

window.addEventListener("load", () => {
  assignTabName();
  contentSection.textContent = "Content of Tab 1";
  tabFirst.style.border = "2px solid blue";
});

tabFirst.addEventListener("click", () => {
  resetBorder();
  contentSection.textContent = "Content of Tab 1";
  tabFirst.style.border = "2px solid blue";
});

tabSecond.addEventListener("click", () => {
  resetBorder();
  contentSection.textContent = "Content of Tab 2";
  tabSecond.style.border = "2px solid blue";
});

tabThird.addEventListener("click", () => {
  resetBorder();
  contentSection.textContent = "Content of Tab 3";
  tabThird.style.border = "2px solid blue";
});

tabFourth.addEventListener("click", () => {
  resetBorder();
  contentSection.textContent = "Content of Tab 4";
  tabFourth.style.border = "2px solid blue";
});

tabFifth.addEventListener("click", () => {
  resetBorder();
  contentSection.textContent = "Content of Tab 5";
  tabFifth.style.border = "2px solid blue";
});*/

//In above implementation, we have hardcoded implemetation in number of tabs ie 5,
//  but in below implementation, it is dynamic

const TAB_COUNT = 5;

const tabSection = document.getElementById("tab-section");
const contentSection = document.getElementById("content-section");

function resetBorder() {
  for (let i = 1; i <= TAB_COUNT; i++) {
    const currElement = document.getElementById(`item${i}`);
    currElement.style.border = "1px solid black";
  }
}

function createTabs() {
  for (let i = 1; i <= TAB_COUNT; i++) {
    const currElement = document.createElement("div");
    currElement.setAttribute("id", `item${i}`);
    currElement.classList.add("tab");
    currElement.textContent=`Tab ${i}`;

    currElement.addEventListener("click", () => {
      contentSection.textContent = `Content of Tab ${i}`;
      resetBorder();
      currElement.style.border = "2px solid blue";
    });

    tabSection.appendChild(currElement);
  }
}

window.addEventListener("load",()=>{
  createTabs();
  contentSection.textContent="Content of Tab 1";
  const currEle=document.getElementById("item1");
  currEle.style.border="2px solid blue";
  
})
