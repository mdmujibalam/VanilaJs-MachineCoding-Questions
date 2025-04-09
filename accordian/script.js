const data=[
    {
        title:"Accordian Item 1",
        content : "This is the content for item 1"
    },
    {
        title:"Accordian Item 2",
        content : "This is the content for item 2"
    },
    {
        title:"Accordian Item 3",
        content : "This is the content for item 3"
    },
    {
        title:"Accordian Item 4",
        content : "This is the content for item 4"
    },
    {
        title:"Accordian Item 5",
        content : "This is the content for item 5"
    },
];

const accordianContainer= document.getElementById("accordian");

data.forEach((item)=>{

  const accordianItem=document.createElement("div");
  accordianItem.classList.add("accordian-item");

  const accordianHeader= document.createElement("div");
  accordianHeader.classList.add("accordian-header");
  accordianHeader.textContent=item.title;

  accordianHeader.addEventListener("click", ()=>{
    let content= accordianItem.querySelector(".accordian-body");
    content.classList.toggle("active");
  });


  const accordianBody=document.createElement("div");
  accordianBody.classList.add("accordian-body");
  accordianBody.textContent= item.content;

  accordianItem.appendChild(accordianHeader);
  accordianItem.appendChild(accordianBody);

  accordianContainer.appendChild(accordianItem);


});