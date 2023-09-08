import React from 'react';

const WeatherFooter = ({ data }) => {
  // If the location is not unknown the footer with the 'feels like' and 'wind speed' will be displayed.
  if (data.name !== undefined)
  return (
    <footer>
      <div className="feels">
        <h4 className="footerH">Feels like</h4>
        {/* The feels_like is a sub category to main, so I have to first enter main using the if/else (?/:) statement */}
        {/* The toFixed function rounds off to one decimal */}
        {data.main ? (
          <p className="footerP">{data.main.feels_like.toFixed(1)}°C</p>
        ) : null}
      </div>

      <div className="wind">
        <h4 className="footerH">Wind</h4>
        {/* The speed is a sub category to wind, that is a sub category to main, so I have to first enter main, then wind using the if/else (?/:) statement */}
        {/* The toFixed function rounds off to one decimal */}
        {data.main ? (
          <p className="footerP">{data.wind.speed.toFixed(1)} MPS</p>
        ) : null}
      </div>
    </footer>
  );
};

export default WeatherFooter;