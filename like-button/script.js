const btn = document.getElementById("btn");

const myPromise = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
      })
      .then((result)=>{
        const response=result.json();
        return resolve(response);
      })
      .catch((err)=>{
        return reject(err);
      })
  });
};

btn.addEventListener("click", () => {
  btn.textContent = "Loading";

  //Perform asynchronus operation
  myPromise()
    .then((result) => {
      console.log(result);
      btn.textContent = "Liked";
    })
    .catch((error) => {
      console.log("Error Occurred", error);
      btn.textContent = "Error";
    });
});
