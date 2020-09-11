import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { Card } from "react-bootstrap";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
          <Card.Subtitle className="mb-2 text-muted Intro">
            Looks like {props.data.description} <FormattedDate date={props.data.date} />{props.data.city}...<FontAwesomeIcon icon={faPenFancy} />
          </Card.Subtitle>
            <WeatherIcon code={props.data.icon} /><WeatherTemperature celsius={props.data.temperature} />
          <Card.Text className="Stats">
            With {props.data.humidity}% humidity and wind speed of{" "}
            {props.data.wind} km/h
          </Card.Text>
          </div>
    );
}