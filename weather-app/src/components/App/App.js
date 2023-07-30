import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherFooter from '../Footer/Footer';
import './App.css';

function App() {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e037dda92e15438d349856b12b15468d`;

  const search = (event) => {
    if (event.key === 'Enter') {
      axios.get(apiUrl).then((response) => {
        setData(response.data);
        setError('');
      })
      .catch((error) => {
        setError(`${location} is not a place that we know of...`);
        });
    }
  };

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
      <div className='error'>
      {error && <p>{error}</p>}
      </div>

      <div className='container'>
        <WeatherInfo data={data} capitalizeFirstLetter={capitalizeFirstLetter} />
        <WeatherFooter data={data} />
      </div>
    </div>
  );
}

export default App;