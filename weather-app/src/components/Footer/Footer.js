import React from 'react';

const WeatherFooter = ({ data }) => {
  if (data.name !== undefined)
  return (
    <footer>
      <div className='feels'>
        <h4 className='footerH'>Feels like</h4>
        {data.main ? <p className='footerP'>{data.main.feels_like.toFixed(1)}°C</p> : null}
      </div>

      <div className='wind'>
        <h4 className='footerH'>Wind</h4>
        {data.main ? <p className='footerP'>{data.wind.speed.toFixed(1)} MPS</p> : null}
      </div>
    </footer>
  );
};

export default WeatherFooter;