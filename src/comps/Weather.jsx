import { useEffect, useState } from "react";
import { fetchWeather, getWeatherIcon } from "../utils/utils";
import WeatherWidget, { Temp, WeatherIcon } from "../styles/WeatherWidget";
import Graph from "./Graph";
import { weatherApiResponse } from "../utils/apiTestResponse";

const Weather = () => {
  const [weather, setWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  useEffect(() => {
    fetchWeather()
      .then((data) => {
        setWeather(data);
        getWeatherIcon(data.current.weather).then((icon) => {
          setWeatherIcon(icon);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!weather) {
    return null;
  } else {
    return (
      <WeatherWidget>
        <Temp>{Math.round(weather.current.feels_like) + "°"}</Temp>
        <WeatherIcon src={weatherIcon} />
        <Graph weather={weather} />
      </WeatherWidget>
    );
  }
};

export default Weather;
