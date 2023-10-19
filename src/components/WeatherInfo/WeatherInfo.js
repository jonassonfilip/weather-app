import React from "react";

const WeatherInfo = ({ data, capitalizeFirstLetter }) => {
  // If the location is not unknown the weather info with city name, country code, temperature and description will be displayed.
  if (data.name !== undefined)
    return (
      <header>
        <div className="cityInfo">
          <h1 className="headerCity">{data.name}</h1>
          {/* The country code, temp and description is sub categories to sys and weather, that is a sub categories to main, so I have to first enter main, then the sub categories using the if/else (?/:) statement */}
          {/* The toFixed function rounds off to one decimal */}
          {data.main ? (
            <h3 className="headerCountry">{data.sys.country}</h3>
          ) : null}
          <div className="description">
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
