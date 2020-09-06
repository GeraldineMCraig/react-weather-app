import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import Degrees from "./Degrees";
import Stats from "./Stats";
import Footer from "./Footer";
import { Card } from "react-bootstrap";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 class="display-4">
        Geraldine's <small className="text-muted">SheCodes Weather App</small>
      </h1>
      <hr />
      <Card className="text-center">
  <Card.Header><Header /></Card.Header>
  <Card.Body>
  <Card.Text>
      <Weather />
    </Card.Text>
    <Card.Title><Degrees /></Card.Title>
    <Card.Text>
      <Stats />
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted"><Footer /></Card.Footer>
</Card>

      </div>
    </div>
  );
}
