import React from "react";
import { Card } from "react-bootstrap";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Weather.css";

export default function Weather() {
    let weatherData = {
      city: "New York",
      date: "Tuesday 10:00",
      description: "Cloudy"
    };
  
    return (
      <div className="Weather">
        <Card.Subtitle className="mb-2 text-muted weather">
          Looks like {weatherData.description} this {weatherData.date},{" "}
          {weatherData.city}...
          <FontAwesomeIcon icon={faPenFancy} />
        </Card.Subtitle>
      </div>
    );
}