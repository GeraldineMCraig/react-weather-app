import React, { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false })
    ;
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Wednesday 07:00",
            description: response.data.weather[0].description,
            iconUrl: "http://openweathermap.org/img/wn/04n@2x.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    if (weatherData.ready) {
        return (
      <div className="Weather">
        <Card.Subtitle className="mb-2 text-muted weather">
          Looks like {weatherData.description} this {weatherData.date},{" "}
          {weatherData.city}...
          <FontAwesomeIcon icon={faPenFancy} />
        </Card.Subtitle>
        <Card.Title className="degrees">
                    <img src={weatherData.iconUrl} alt="{weatherData.description}" />
                    {Math.round(weatherData.temperature)}{" "}
                    <small className="text-muted units">
                        <a href="/">°C</a> |<a href="/">°F</a></small></Card.Title>
        <Card.Text className="stats">
          With {weatherData.humidity}% humidity and wind speed of{" "}
          {weatherData.windSpeed} km/h
        </Card.Text>
      </div>
    );
        } else {
            const apiKey = "3a94f3778290bfeee61278505dbbe51d";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);

            return "Loading...";
        }
    }