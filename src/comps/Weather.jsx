import { useEffect, useState } from 'react';
import {fetchWeather, getWeatherIcon} from '../utils/utils'
import WeatherWidget, {Temp, WeatherIcon} from '../styles/WeatherWidget';
//for testing
import { weatherApiResponse } from '../utils/apiTestResponse';
import WeatherGraph from './WeatherGraph';

const Weather = () => {  
  const [weather,setWeather] = useState()
  const [weatherIcon,setWeatherIcon] = useState()
  
  useEffect(() => {
    // fetchWeather().then(data => {
    //   setWeather(data);
    //   console.log(data);
    // }).catch(err => {
    //   console.log(err);
    // });
    
    setWeather(weatherApiResponse);
    getWeatherIcon(weatherApiResponse).then((icon)=> {
      setWeatherIcon(icon);
    });
  },[]);
  
  if(!weather){
    return null;
  } else{
    return (
      <WeatherWidget>
        <Temp>
          {Math.round(weatherApiResponse.current.feels_like) + '°'}
        </Temp>
        <WeatherIcon src={weatherIcon}/>
      </WeatherWidget>
    );
  }
}

export default Weather;