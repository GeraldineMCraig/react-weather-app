import React from "react";
import { Card } from "react-bootstrap";

import "./Stats.css";

export default function Stats() {
    let weatherData = {
      humidity: "80",
      windSpeed: "10"
    };
    return (
      <div className="Stats">
        <Card.Text className="stats">
          With {weatherData.humidity}% humidity and wind speed of{" "}
          {weatherData.windSpeed} km/h
        </Card.Text>
      </div>
    );
}