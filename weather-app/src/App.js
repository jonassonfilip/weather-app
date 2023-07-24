import React from 'react';
import axios from 'axios';
import { useState } from 'react';
/* import './App.css'; */

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e037dda92e15438d349856b12b15468d`;

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
          <h1>Gothenburg</h1>
          <h3>Sweden</h3>
        </div>
        <div className='temprature'>
          <p>19°C</p>
        </div>
        <div className='description'>
          <p>Clouds</p>
        </div>

      </header>

      <footer className='footer'>

        <div className='feels'>
          <h4>Feels like</h4>
        <p>19°C</p>
        </div>

        <div className='wind'>
        <h4>Wind</h4>
        <p>8 MPH</p>
        </div>

      </footer>

      </div>
    </div>
  );
}

export default App;