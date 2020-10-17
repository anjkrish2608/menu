import React from "react";
import { Link } from "react-router-dom";
import Col from "../Col";
import Row from "../Row";
import "./style.css";
import FontAwesome from 'react-fontawesome';

function Footer() {
  return (
    <footer className="mobile-bottom-bar">
      <Row>
        <Col size="small-3 cell">

        </Col>
        <Col size="small-3 cell">
        <span className="footer-text">
          Menu Application
          </span>
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
        <span className="space">   </span>
        </Col>
        <Col size="small-3 cell">
        <Link to="/"><span className="footer-link">Home</span></Link>
        </Col>
        <Col size="small-3 cell">
        <Link  to="/contact"><span className="footer-link">Contact</span></Link>
        </Col>
        <Col size="small-3 cell">
        <Link to="/help"><span className="footer-link">Help</span></Link>
        </Col>
      </Row>
      </footer>
  );
}

export default Footer;
