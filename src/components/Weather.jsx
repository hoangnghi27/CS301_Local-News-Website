import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Weather.scss";
import wind from "../assets/imgs/wind.png";

function Weather() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lat = "10.82302";
    const lon = "106.62965";
    const units = "metric";
    const apiKey = "2388e442878e626ec34d7ad4f42fb3bb";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data); // Set the data to state
        setIsLoading(false);
        const date = new Date(response.data.dt * 1000);
        const formattedTime = `${date.getHours()}:${(
          "0" + date.getMinutes()
        ).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`;
        console.log(formattedTime);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const date = new Date(data?.dt * 1000);
  const hours = date.getHours();
  const formattedTime = `${hours}:${("0" + date.getMinutes()).slice(-2)}:${(
    "0" + date.getSeconds()
  ).slice(-2)}`;

  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours < 18) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Night";
  }

  let windtype;
  if (data?.wind?.speed < 0.5) {
    windtype = "Calm";
  } else if (data?.wind?.speed < 1.5) {
    windtype = "Light Breeze";
  } else if (data?.wind?.speed < 3.3) {
    windtype = "Gentle Breeze";
  } else if (data?.wind?.speed < 5.5) {
    windtype = "Moderate Breeze";
  } else if (data?.wind?.speed < 7.9) {
    windtype = "Fresh Breeze";
  } else if (data?.wind?.speed < 10.7) {
    windtype = "Strong Breeze";
  } else if (data?.wind?.speed < 13.8) {
    windtype = "Near Gale";
  } else if (data?.wind?.speed < 17.1) {
    windtype = "Gale";
  } else if (data?.wind?.speed < 20.7) {
    windtype = "Severe Gale";
  } else if (data?.wind?.speed < 24.4) {
    windtype = "Strong Gale";
  } else if (data?.wind?.speed < 28.4) {
    windtype = "Storm";
  } else if (data?.wind?.speed < 32.6) {
    windtype = "Violent Storm";
  } else {
    windtype = "Hurricane";
  }

  return (
    <div className='weather-container'>
      <div className='weather-content'>
        <div className='weather-header'>
          <h1>Ho Chi Minh City</h1>
          <h2>Good {timeOfDay}</h2>
        </div>
        <div className='weather-body'>
          <div className='body-header'>
            <div className='time'>Time: {formattedTime}</div>
            <div className='temp'>
              <div className='temperature'>
                {Math.floor(data?.main?.temp)}°C
              </div>
            </div>
            <div className='wind'>
              <div className='wind-icon'>
                <img
                  src={wind}
                  alt='wind'
                />
              </div>
              <div className='wind-detail'>
                <h3>Wind speed: {data?.wind?.speed} m/s</h3>
                <div className='wind-type'>{windtype}</div>
              </div>
            </div>
          </div>
          <div className='logo'>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
              alt='logo'
            />
          </div>
          <div className='weather-description'>
            <div className='title'>{data?.weather[0]?.description}</div>

            <div className='humidity'>Humidity: {data?.main?.humidity} %</div>

            <div className='cloud'>Cloud: {data?.clouds?.all} %</div>

            <div className='visibility'>Visibility: {data?.visibility} meter</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
