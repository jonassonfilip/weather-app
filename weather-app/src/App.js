import React from 'react';
import axios from 'axios';
import { useState } from 'react';
/* import './App.css'; */

function App() {

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e037dda92e15438d349856b12b15468d`;

  const search = (event) => {
    if (event.key === 'Enter') {
      axios.get(apiUrl).then((response) => {
        setData(response.data)
      })
    }
  }

  return (
    <div className="App">

      <div className='searchField'>
        <input
        type='text'
        placeholder="Search location"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={search}
        />
      </div>

      <div className='container'>

      <header className="header">

        <div className='city'>
          <h1>{data.name}</h1>
          {data.main ? <h3>{data.sys.country}</h3> : null}
        </div>
        
        <div className='temprature'>
        {data.main ? <p>{data.main.temp}°C</p> : null}
        </div>
        <div className='description'>
          {data.weather ? <p>{capitalizeFirstLetter(data.weather[0].description)}</p> : null}
        </div>

      </header>

      <footer className='footer'>

        <div className='feels'>
          <h4>Feels like</h4>
        {data.main ? <p>{data.main.feels_like}°C</p> : null}
        </div>

        <div className='wind'>
        <h4>Wind</h4>
        {data.main ? <p>{data.wind.speed} MPS</p> : null}
        </div>

      </footer>

      </div>
    </div>
  );
}

export default App;