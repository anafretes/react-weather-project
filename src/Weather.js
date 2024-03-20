import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getApiUrl(city) {
    const apiKey = "1bfa1ab4e6b89407b8af3385at1eocb2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    return apiUrl;
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Tuesday 18:05",
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(Number(response.data.wind.speed) * 3.6),
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      iconAlt: response.data.condition.icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row gx-1">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 d-flex align-items-baseline pt-1">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.iconAlt}
              className="align-self-center"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6 pt-4">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    axios.get(getApiUrl(props.defaultCity)).then(handleResponse);
    return "Loading...";
  }
}
