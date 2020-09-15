import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { Card, Container, Row, Col } from "react-bootstrap";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <Card.Subtitle className="mb-2 text-muted Intro">
        Looks like {props.data.description}{" "}
        <FormattedDate date={props.data.date} />
        {props.data.city}...
        <FontAwesomeIcon icon={faPenFancy} />
      </Card.Subtitle>
      <Container className="Temperature">
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <WeatherIcon code={props.data.icon} />
          </Col>
          <Col md="auto">
            <WeatherTemperature celsius={props.data.temperature} />
          </Col>
        </Row>
      </Container>
      <Card.Text className="Stats">
        With {props.data.humidity}% humidity and wind speed of {props.data.wind}{" "}
        km/h
      </Card.Text>
    </div>
  );
}
