const images = [
    {
      src: "https://media.istockphoto.com/id/841278554/photo/beautiful-morning-light-in-public-park-with-green-grass-field.jpg?s=1024x1024&w=is&k=20&c=5n5BuqdDCb2KgdugAVfS93VwjsRWNcHQPhUp7pa-2r4=",
      alt: "A beautiful morning light with green park",
      title: "Morning Park",
    },
    {
      src: "https://media.istockphoto.com/id/926547380/photo/green-agriculture-fields-and-sunset-in-blue-sky-with-clouds.jpg?s=1024x1024&w=is&k=20&c=NV50AT-XWc1HIS5zldI8XO9eWqmNMX6IMcIoFAwZywI=",
      alt: "A green agricultural field with blue sky",
      title: "Agricultural Field",
    },
    {
      src: "https://media.istockphoto.com/id/508908231/photo/golden-wheat-field-and-sunny-day.jpg?s=1024x1024&w=is&k=20&c=7IVJSjUcCXsN2IH6P5B9AQbMr1dGLfrc8hcSGKk3dmM=",
      alt: "Golden Wheat Field in a sunny day",
      title: "Golden Wheat Field",
    },
    {
      src: "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=1024x1024&w=is&k=20&c=vX0rDbuYIqsekJEP6l7JrkNRFZIUxojMQn27HH-lA2U=",
      alt: "Tea Plantation in hilly area",
      title: "Tea Plantation",
    },
    {
      src: "https://media.istockphoto.com/id/1440503559/photo/forest-sunlight.jpg?s=1024x1024&w=is&k=20&c=A4w_q46OjfcM3MnsfuvyggEQv0S5wudh9WlZFCbtxzY=",
      alt: "A sunny park",
      title: "Sunny Park",
    },
  ];

  let activeIndex=0;

  const updateImage = () =>{
    imageElement.src= images[activeIndex].src;
    imageElement.alt= images[activeIndex].alt;
    imageElement.title= images[activeIndex].title;
  }

  const imageHolder=document.getElementById("image-holder");
  const prevButton=document.getElementById("prev");
  const nextButton=document.getElementById("next");

  const imageElement=document.createElement("img");
  imageHolder.appendChild(imageElement);

  updateImage();
    
  nextButton.addEventListener('click', ()=>{
    activeIndex === images.length ? (activeIndex=0): activeIndex++;
  
    updateImage();
  })

  prevButton.addEventListener('click', ()=>{
    activeIndex === 0 ? (activeIndex= images.length -1 ): activeIndex--;

    updateImage();
 })
