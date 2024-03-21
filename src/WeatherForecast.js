import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <div className="mx-3">
            <WeatherIcon alt="clear-sky-day" size={36} />
          </div>
          <div className="forecastTemps">
            <span className="forecastTempsMax">19°</span>{" "}
            <span className="forecastTempsMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
