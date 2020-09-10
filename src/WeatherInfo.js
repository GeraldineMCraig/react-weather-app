import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"
import { Card } from "react-bootstrap";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">  
    <Card.Body>
          <Card.Subtitle className="mb-2 text-muted weather">
            Looks like {props.data.description} this <FormattedDate date={props.data.date} />{" "}
            {props.data.city}...
            <FontAwesomeIcon icon={faPenFancy} />
          </Card.Subtitle>
          <Card.Title className="degrees">
            <WeatherIcon code={props.data.icon} />
                      {Math.round(props.data.temperature)}{" "}
                      <small className="text-muted units"><a href="/">°C</a> |<a href="/">°F</a></small></Card.Title>
          <Card.Text className="stats">
            With {props.data.humidity}% humidity and wind speed of{" "}
            {props.data.wind} km/h
          </Card.Text>
          </Card.Body>
          </div>
    );
}