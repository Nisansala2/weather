
import './App.css';
import React, { useState } from 'react';
import './Components/Weather.css';

  
 
function App() {
  const apiKey= 'd378ab9eebf51699bd8d20ecaaf78566'
  const [weatherData,setWeatherData] =useState([{}])
  const [city, setCity]= useState( "")

  const getWeather =(event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
      response => response.json()
      ).then(
        data => {
          setWeatherData(data)
        }
      )
    }
  } 
  
    return (
      <div className='app'>
       
        <input  className='input'
       placeholder='Enter city' 
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}></input>

         {typeof weatherData.main ==='undefined' ? (
          <div>
            <h2 className='welcome'>Welcome to weather app.</h2>
            <p className='desp'> 
             Enter in a city to get the weather</p>
            <div className='cloud'>
            <img src='/images/sun.webp' alt= 'sun' style={{ height: '180px' } }/ >
           
            </div>
            <button>Login</button>
            </div>
        ):
        (
          <div className='weather-data'>
            
          <h2 className='whead'>Weather in {weatherData.name}</h2>
          <p className='temp'>Temperature: {weatherData.main.temp}°C</p>
          <p className='des'>Weather: {weatherData.weather[0].description}</p>
          <p className='hum'>Humidity: {weatherData.main.humidity}%</p>
          <p className='wind'>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
        )}
        {weatherData.cod === "404" ?(
          <p> City not found</p>
        ):(
          <></>
        )}
        
        
      </div>
    );
  
}
 

export default App;
