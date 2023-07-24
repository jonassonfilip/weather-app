import React from 'react';
import axios from 'axios';
import { useState } from 'react';
/* import './App.css'; */

function App() {

/*   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=e037dda92e15438d349856b12b15468d` */

  return (
    <div className="App">

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
        <p>19°C</p>
        </div>

        <div className='wind'>
        <p>8 MPH</p>
        </div>

      </footer>

      </div>
    </div>
  );
}

export default App;