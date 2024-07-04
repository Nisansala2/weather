import React from 'react'
import './Weather.css';

const Weather = ({ data }) => {
  return (
    <div className='weather'>
      
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
