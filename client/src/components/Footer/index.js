import React from "react";
import Col from "../Col";
import Row from "../Row";
import "./style.css";
import FontAwesome from 'react-fontawesome'

function Footer() {
  return (
    <footer>
      <Row>
        <Col size="small-3 cell">

        </Col>
        <Col size="small-3 cell">
          Menu Application
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col size="small-3 cell">

        </Col>
        <Col size="small-3 cell">
          <FontAwesome className="fas fa-utensils" />
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col size="small-3 cell">
        <Link to="/">Home</Link>
        </Col>
        <Col size="small-3 cell">
        <Link  to="/contact">Contact</Link>
        </Col>
        <Col>
        <Link to="/help">Help</Link>
        </Col>
      </Row>
      </footer>
  );
}

export default Footer;
