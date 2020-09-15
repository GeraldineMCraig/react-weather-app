import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import { Row, Col, Card, Form, Button, FormControl } from "react-bootstrap";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Card.Header>
          <Row>
            <Col xs="auto">
              <Card.Text className="Cities">
                Lisbon | Paris | Sydney | San Francisco
              </Card.Text>
            </Col>
            <Col>
              <Form onSubmit={handleSubmit} className="Search">
                <Form.Row>
                  <Col xs="auto">
                    <Button variant="outline-secondary" size="sm">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </Button>
                    <Button type="submit" variant="outline-secondary" size="sm">
                      Search
                    </Button>
                  </Col>
                  <Col>
                    <FormControl
                      size="sm"
                      type="search"
                      placeholder="Type a city..."
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="CardBody">
          <WeatherInfo data={weatherData} />
          <WeatherForecast city={weatherData.city} />
        </Card.Body>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
