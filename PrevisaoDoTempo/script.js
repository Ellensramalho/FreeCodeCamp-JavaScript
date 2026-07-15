const weatherButton =
  document.getElementById("get-weather-btn");

const citySelect =
  document.getElementById("city-select");

const weatherIcon =
  document.getElementById("weather-icon");

const mainTemperature =
  document.getElementById("main-temperature");

const feelsLike =
  document.getElementById("feels-like");

const humidity =
  document.getElementById("humidity");

const wind =
  document.getElementById("wind");

const windGust =
  document.getElementById("wind-gust");

const weatherMain =
  document.getElementById("weather-main");

const locationElement =
  document.getElementById("location");


async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error. Status: ${response.status}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}


async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert(
      "Something went wrong, please try again later."
    );

    return;
  }

  const icon =
    data.weather?.[0]?.icon ?? "";

  const mainWeather =
    data.weather?.[0]?.main ?? "N/A";

  const temperature =
    data.main?.temp ?? "N/A";

  const feelsLikeTemperature =
    data.main?.feels_like ?? "N/A";

  const humidityValue =
    data.main?.humidity ?? "N/A";

  const windSpeed =
    data.wind?.speed ?? "N/A";

  const windGustSpeed =
    data.wind?.gust ?? "N/A";

  const locationName =
    data.name ?? "N/A";


  weatherIcon.src = icon;

  weatherIcon.alt =
    mainWeather === "N/A"
      ? "N/A"
      : `${mainWeather} weather icon`;

  weatherMain.textContent = mainWeather;

  mainTemperature.textContent =
    temperature === "N/A"
      ? "N/A"
      : `${temperature} °C`;

  feelsLike.textContent =
    feelsLikeTemperature === "N/A"
      ? "N/A"
      : `${feelsLikeTemperature} °C`;

  humidity.textContent =
    humidityValue === "N/A"
      ? "N/A"
      : `${humidityValue}%`;

  wind.textContent =
    windSpeed === "N/A"
      ? "N/A"
      : `${windSpeed} m/s`;

  windGust.textContent =
    windGustSpeed === "N/A"
      ? "N/A"
      : `${windGustSpeed} m/s`;

  locationElement.textContent =
    locationName;
}


weatherButton.addEventListener("click", () => {
  const selectedCity = citySelect.value;

  if (!selectedCity) {
    return;
  }

  showWeather(selectedCity);
});