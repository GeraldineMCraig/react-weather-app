import React from "react";
import { Card } from "react-bootstrap";

import "./Degrees.css";

export default function Degrees() {
   let weatherData = {
        description: "Cloudy",
        imgUrl: "http://openweathermap.org/img/wn/03n@2x.png",
        temperature: "19"
        };

  return (
      <div className="Degrees">
          <Card.Title className="degrees">
              <img src={weatherData.imgUrl} alt="{weatherData.description}" />
              {weatherData.temperature}{" "}
              <small className="text-muted units">
                  <a href="/">°C</a> |<a href="/">°F</a></small></Card.Title>
    </div>
    );
    }