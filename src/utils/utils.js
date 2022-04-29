import { openWeatherMap } from "./config";

const fetchWeather = async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=55.65&lon=12.40&units=metric&lang=da&appid=73fdc10d51adf5c5ef1ff7857f89dea7",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
};

const getWeatherIcon = async (weather) => {
  const id = weather[0].id;
  const time = weather[0].icon.slice(-1);
  let svgPath;
  if ( time === "d") {
    svgPath = openWeatherMap.day[id];
  } else if (time === "n") {
    svgPath = openWeatherMap.night[id];
  }
  const icon = await import(`../svg/${svgPath}.svg`);
  return icon.default;
}

const utils = {
  fetchWeather: fetchWeather,
  getWeatherIcon: getWeatherIcon,
};

export { fetchWeather, getWeatherIcon };
export default utils;
