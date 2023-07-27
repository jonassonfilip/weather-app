import React from 'react';

const WeatherFooter = ({ data }) => {
  return (
    <footer>
      <div className='feels'>
        <h4>Feels like</h4>
        {data.main ? <p>{data.main.feels_like}°C</p> : null}
      </div>

      <div className='wind'>
        <h4>Wind</h4>
        {data.main ? <p>{data.wind.speed} MPS</p> : null}
      </div>
    </footer>
  );
};

export default WeatherFooter;