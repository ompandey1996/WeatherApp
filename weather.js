let apiKey = "67744baf7ca41b0fa5adc6be00d21d7b";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  if (data.weather[0].main.toLowerCase() === "clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main.toLowerCase() === "clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main.toLowerCase() === "rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main.toLowerCase() === "mist") {
    weatherIcon.src = "images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
