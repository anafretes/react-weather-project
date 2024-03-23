import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherForecastDay(props) {
  let forecastDate = new Date(props.data.time * 1000);

  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecastDay">
        <FormattedDate date={forecastDate} short={true} />
      </div>
      <div className="mx-3">
        <WeatherIcon alt={props.data.condition.icon} size={36} />
      </div>
      <div className="forecastTemps">
        <span className="forecastTempsMax">{maxTemp()}°</span>{" "}
        <span className="forecastTempsMin">{minTemp()}°</span>
      </div>
    </div>
  );
}
