import React from "react";

export default function FormattedDate(props) {
  let minutes = props.date.getMinutes();
  let hours = props.date.getHours();
  let day = props.date.getDay();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return (
    <div>
      {formattedDay} {hours}:{minutes}
    </div>
  );
}
