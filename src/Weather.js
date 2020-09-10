import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button, FormControl } from "react-bootstrap";
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
            iconUrl: "http://openweathermap.org/img/wn/04n@2x.png",
            wind: response.data.wind.speed,
            city: response.data.name
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
            <Container>
          <Row>
            <Col sm={6}>
              <Card.Text className="cities">
                Lisbon | Paris | Sydney | San Francisco
              </Card.Text>
            </Col>
            <Col sm={6}>
              <Form inline onSubmit={handleSubmit}>
                  <Button variant="outline-secondary" size="sm">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </Button>
                  <Button type="submit" variant="outline-secondary" size="sm">
                    Search
                    </Button>
                  <FormControl
                  size="sm"
                  type="search"
                  placeholder="Type a city..."
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </Form>
            </Col>
          </Row>
        </Container>
            </Card.Header>
              <WeatherInfo data={weatherData} />
      </div>
    );
        } else {
          search();
          return "Loading...";
        }
    }