/*const data=[
    {
        title:"Title 1",
        description:"Description of title 1"
    },
    {
        title:"Title 2",
        description:"Description of title 2"
    },
    {
        title:"Title 3",
        description:"Description of title 3"
    },
    {
        title:"Title 4",
        description:"Description of title 4"
    },
    {
        title:"Title 5",
        description:"Description of title 5"
    },
    {
        title:"Title 6",
        description:"Description of title 6"
    }
]*/

const mainElement=document.querySelector(".main-div");

const fetchData= async (url)=>{
  try{
    const data= await fetch(url);
    const response= await data.json();
    console.log("response", response);
    return response;
  }catch(error){
    console.log("Error occurred", error);
    return [];
  }
}

(async (url)=>{
    const postList=await fetchData(url);

    postList.forEach((item)=>{

        const titleElement=document.createElement("div");
        titleElement.classList.add("title");
        titleElement.textContent=`Title: ${item.title}`;
    
        const descriptionElement=document.createElement("div");
        descriptionElement.classList.add("decription");
        descriptionElement.textContent=`Description: ${item.body}`;
    
        const container=document.createElement("div");
        container.classList.add("container");
        container.appendChild(titleElement);
        container.appendChild(descriptionElement);
    
        mainElement.appendChild(container);

    })
})('https://jsonplaceholder.typicode.com/posts')