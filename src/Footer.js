import React from "react";
import { Card } from "react-bootstrap";

export default function Footer() {
  return (
    <Card.Footer className="text-muted">
      <small>
        <a href="https://github.com/KissaSpirit/weather-react">
          Open-source code
        </a>{" "}
        by SheCodes and{" "}
        <a href="https://github.com/KissaSpirit">Geraldine Craig</a>
      </small>
    </Card.Footer>
  );
}
