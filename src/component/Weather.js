import React, { useState } from "react";

const Weather = () => {

    const [city, setCity] = useState('');
    const [cityOutput, setCityOutput] = useState('');
    const [description, setDescription] = useState('');
    const [temperature, setTemperature] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const apiKey = '3045dd712ffe6e702e3245525ac7fa38';

    const citySearch = (event) => {
        setCity(event.target.value);
    }

    const convertTemperature = (val) => (val - 273).toFixed(2);

    const fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            const nameVal = data.name;
        const descrip = data.weather[0].description;
        const tempature = data.main.temp;
        const wndspd = data.wind.speed;
            setCityOutput(`Weather of ${nameVal}`);
            setTemperature(`Temperature: ${convertTemperature(tempature)} C`);
        setDescription(`Sky Conditions: ${descrip}`);
        setWindSpeed(`Wind Speed: ${wndspd} km/h`);
        })
        .catch((err) => alert('You entered the wrong city name'));
    }

    return (
        <div className="container-fluid">
      <section className="main">
        <section className="inputs">
          <input type="text" onChange={citySearch} placeholder="Enter any city..." />
          <input type="submit" value="Submit" onClick={fetchData}  />
        </section>

        <section className="display">
        <div className="wrapper">
            <h2 id="cityoutput">{cityOutput}</h2>
            <p id="description">{description}</p>
            <p id="temp">{temperature}</p>
            <p id="wind">{windSpeed}</p>
          </div>
        </section>
      </section>
    </div>
    )

}

export default Weather;