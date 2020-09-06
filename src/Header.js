import React from "react";
import { Container, Row, Col, Card, InputGroup, Button, FormControl } from "react-bootstrap";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.css";

export default function Header() {
    return (
        <Container>
          <Row>
            <Col sm={7}>
              <Card.Text className="cities">
                Lisbon | Paris | Sydney | San Francisco
              </Card.Text>
            </Col>
            <Col sm={5}>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <Button variant="outline-secondary">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </Button>
                  <input
                    type="submit"
                    value="🔍"
                    className="btn btn-outline-secondary"
                  />
                </InputGroup.Prepend>
                <FormControl
                  aria-describedby="basic-addon1"
                  type="search"
                  placeholder="Type a city..."
                  autofocus="on"
                  autocomplete="off"
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      );
}