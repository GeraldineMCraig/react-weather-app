import React from "react";
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
      <Card>
      <Weather defaultCity="New York"/>
      <Footer />
      </Card>
      </div>
      </div>
  );
}
