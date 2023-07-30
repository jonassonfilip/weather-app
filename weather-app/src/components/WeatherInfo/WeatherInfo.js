import React from 'react';

const WeatherInfo = ({ data, capitalizeFirstLetter }) => {
  if (data.name !== undefined)
  return (
    <header>
      <div className='cityInfo'>
        <h1 className='headerCity'>{data.name}</h1>
        {data.main ? <h3 className='headerCountry'>{data.sys.country}</h3> : null}
        <div className='description'>
        {data.main ? <p>{data.main.temp.toFixed(1)}°C</p> : null}
        <div>
        {data.weather ? (
          <p>{capitalizeFirstLetter(data.weather[0].description)}</p>
        ) : null}
      </div>
      </div>
      </div>

      
    </header>
  );
};

export default WeatherInfo;