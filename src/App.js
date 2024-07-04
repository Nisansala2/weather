
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import './Components/Weather.css';
import Weather from './Components/Weather.js';
import Search from './Components/Search.js';
  
 

  const App = () => {
    const [weatherData, setWeatherData] = useState(null);
  
    const fetchWeather = async (city) => {
      try {
        const apiKey = process.env.d378ab9eebf51699bd8d20ecaaf78566;
        if (!apiKey) {
          throw new Error("API key is missing");
        }
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}}&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
  
    return (
      <div>
        <h1>Weather App</h1>
        <Search fetchWeather={fetchWeather} />
        {weatherData && <Weather data={weatherData} />}
      </div>
    );
  };
  
 

export default App;
