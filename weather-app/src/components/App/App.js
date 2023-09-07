import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  // Capitalizing the first letter (0) because the api sends description in lowercase letters
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Variables for the data i want to fetch from the api, the location name and the error message
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const apiKey = process.env.REACT_APP_API_KEY;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  // When you press enter axios will fetch the data from the api for the location written. If the locations isn't found, the error message appears.
  const search = (event) => {
    if (event.key === 'Enter') {
      axios.get(apiUrl).then((response) => {
        setData(response.data);
        setError('');
      })
      .catch((error) => {
        setError(`${location} is not a place that we know of. Please try again!`);
        });
    }
  };

  return (
    <div className="App">
      {/* Setting up the search field. When pressing enter the search variable is called. */}
      <div className='searchField'>
        <input
          type='text'
          placeholder="Search location"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={search}
        />
      </div>

      {/* Displaying the error message if the error state is true */}
      <div className='error'>
      {error && <p>{error}</p>}
      </div>

      {/* Displaying the data from the components fetched from the api if the location is found, calling the function that capitalize the first letter. */}
      <div className='container'>
        <WeatherInfo data={data} capitalizeFirstLetter={capitalizeFirstLetter} />
        <Footer data={data} />
      </div>
    </div>
  );
}

export default App;