const cities=['Ranchi', 'Kolkata', 'Pune', 'Mumbai', 'Chandigarh', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
'Thane', 'Rourkela', 'Goa', 'Raipur', 'Dhanbad', 'Jamshedpur', 'Ambala', 'Surat', 'Gurugram', 'Kochi', 'Patiyala', 'Jabalpur',
'Rewa', 'Lucknow', 'Patna', 'Durgapur'];

const inputElement=document.getElementById("inputBox");
const listElement= document.getElementById("list-item");
const citiesElement=document.getElementById("cities");

const createListOfCities =(data)=>{
    citiesElement.innerHTML='';

    data.forEach((city)=>{
        const newCity=document.createElement('li');
        newCity.textContent=city;
       
        citiesElement.appendChild(newCity);
    })
}

inputElement.addEventListener('keyup',(e)=>{

  if(e.target.value === ''){
    createListOfCities(cities);
  }
  else{
    const filteredCities= cities.filter((city)=> city.toLowerCase().includes(e.target.value.toLowerCase()));
   // console.log("Filtered Cities", filteredCities);
    createListOfCities(filteredCities);
  }
 
});


createListOfCities(cities);