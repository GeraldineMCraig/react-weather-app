import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="display-4">
        Geraldine's <small className="text-muted">SheCodes Weather App</small>
      </h1>
      <hr />
      <Card className="text-center">
  <Card.Header><Header /></Card.Header>
  <Card.Body>
      <Weather defaultCity="New York"/>
  </Card.Body>
  <Card.Footer className="text-muted"><Footer /></Card.Footer>
</Card>

      </div>
    </div>
  );
}
