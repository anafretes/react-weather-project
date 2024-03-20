import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York</h1>
      <ul>
        <li>Tuesday 18:05</li>
        <li>Rainy</li>
      </ul>
      <div className="row">
        <div className="col-6 d-flex align-items-baseline pt-1">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
            className="align-self-center"
          />
          <span className="temperature">118</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6 pt-4">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
