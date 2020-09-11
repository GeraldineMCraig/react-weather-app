import React, {useState} from "react";
import { Card } from "react-bootstrap";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "celsius") {
        return (
            <Card.Title className="WeatherTemperature">
            {Math.round(props.celsius)}{" "}
            <small className="text-muted units">
                °C |<a href="/" onClick={showFahrenheit}>°F</a>
                </small>
                </Card.Title>
    );
} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <Card.Title className="WeatherTemperature">
        {Math.round(fahrenheit)}{" "}
        <small className="text-muted units">
            <a href="/" onClick={showCelsius}>°C</a> |°F
            </small>
            </Card.Title>
            );
    }
}