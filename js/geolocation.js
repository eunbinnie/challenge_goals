const API_KEY = "3cc2c00bbd487be4f723a9d9b7846ddc";

function getSuccuess(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.dir(data);
      const weather = document.querySelector("#weather");
      const city = document.querySelector("#city");
      const weatherIcon = document.querySelector(".weather img");
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function getError() {
  alert('Sorry, no position available.');
}

navigator.geolocation.getCurrentPosition(getSuccuess, getError);