const textInput = document.getElementById("text-input");
const submitBtn = document.getElementById("submit-btn");

const cityName = document.getElementById("city-name");
const regionName = document.getElementById("region");
const countryName = document.getElementById("country");
const latitude = document.getElementById("lat");
const longitude = document.getElementById("long");
const sunRiseTime = document.getElementById("sunRiseTiming");
const sunSetTime = document.getElementById("sunSetTiming");
const currTemp = document.getElementById("temperature");
const obTiming = document.getElementById("obTime");
const currHumidity = document.getElementById("humidity");

let city = "";

const getWeatherDetails = async (currCity) => {
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=7e31243914ebec7268f1e241ceec0412&query=${currCity}`
  );
  const data = await response.json();
  console.log(data);

  cityName.textContent = `City name: ${data.location.name}`;
  regionName.textContent = `Region Name: ${data.location.region}`;
  countryName.textContent = `Country Name: ${data.location.country}`;

  latitude.textContent = `Latitude: ${data.location.lat}`;
  longitude.textContent = `Longitude: ${data.location.lon}`;

  sunRiseTime.textContent = `Sunrise Time: ${data.current.astro.sunrise}`;
  sunSetTime.textContent = `Sunset Time: ${data.current.astro.sunset}`;

  currTemp.textContent = `Current Temperature in C: ${data.current.temperature}`;
  obTiming.textContent = `Observation Time: ${data.current.observation_time}`;
  currHumidity.textContent = `Humidity in RH: ${data.current.humidity}`;
};

textInput.addEventListener("change", (e) => {
  city = e.target.value;
});

submitBtn.addEventListener("click", async () => {
  console.log("Submit Button Clicked !!!");

  if (!city.trim()) {
    // Checks if city input is empty or just spaces
    alert(
      "Please enter a city name before getting weather details of that city!"
    );
    return;
  }

  await getWeatherDetails(city);
});
