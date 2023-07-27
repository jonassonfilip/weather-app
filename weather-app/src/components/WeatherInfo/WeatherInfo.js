import React from 'react';

const WeatherInfo = ({ data, capitalizeFirstLetter }) => {
  return (
    <header className="header">
      <div className='city'>
        <h1 className='headerCity'>{data.name}</h1>
        {data.main ? <h3 className='headerCountry'>{data.sys.country}</h3> : null}
      </div>

      <div className='temprature'>
        {data.main ? <p>{data.main.temp.toFixed(1)}°C</p> : null}
      </div>

      <div className='description'>
        {data.weather ? (
          <p>{capitalizeFirstLetter(data.weather[0].description)}</p>
        ) : null}
      </div>
    </header>
  );
};

export default WeatherInfo;