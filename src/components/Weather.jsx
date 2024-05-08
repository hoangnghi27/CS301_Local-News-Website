import { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [data, setData] = useState();

 
  useEffect(() => {
    const lat = "10.82302";
    const lon = "106.62965";
    const apiKey = "2388e442878e626ec34d7ad4f42fb3bb";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data); // Set the data to state
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <div>Weather</div>;
}

export default Weather;
