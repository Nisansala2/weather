
import './App.css';
import React, { useState } from 'react';
import './Components/Weather.css';

  
 
function App() {
  const apiKey= 'd378ab9eebf51699bd8d20ecaaf78566'
  const [weatherData,setWeatherData] =useState([{}])
  const [city, setCity]= useState( "")
  

  const handlekey =(event) => {
    
      switch (event.button) {
        case 0:
          console.log("Left button clicked");
          break;
        case 1:
          console.log("Middle button clicked");
          break;
        case 2:
          console.log("Right button clicked");
          break;
          default:
            console.log("Unknown button clicked");
      } {
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
      <h2 className='welcome'>Welcome to weather app.</h2>
      <p className='desp'> 
       Enter in a city to get the weather</p>
      
       <div className='contain'>
        <div className='input'>
        <input placeholder='Enter city' 
        onChange={e => setCity(e.target.value)}
        value={city}></input>
        </div>
        <div className='button'>
             <button onClick={handlekey}>Serach</button>
    </div>
    </div>

         {typeof weatherData.main ==='undefined' ? (
          <div>
            
            <div className='cloud'>
            <img src='/images/sun.webp' alt= 'sun' style={{ height: '180px' } }/ >
           
            </div>
           
            </div>
        ):
        (
          <div>
          <h3 className='whead'>Weather in {weatherData.name}</h3>
          <div className='weather-data'>
          
            <div className='temp'>
          
          <p >Temperature  {weatherData.main.temp}°C</p>
          </div>
          <div className='text'>
          <p className='des'>Weather: {weatherData.weather[0].description}</p>
          <p className='hum'>Humidity: {weatherData.main.humidity}%</p>
          <p className='wind'>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
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
