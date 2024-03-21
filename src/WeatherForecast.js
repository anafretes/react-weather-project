import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "1bfa1ab4e6b89407b8af3385at1eocb2";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
