import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Navbar from "../../components/Navbar";

function Home() {

  return (
      <Container>
      <Navbar />
        
        <Row>
          <Col size="small-3 cell">

          </Col>
          <Col size="small-3 cell">
            <h1>menU</h1>
          </Col>
        </Row>
        <Row>
          <Col size="small-3 cell">
            
          </Col>
          <Col size="small-6 cell">
            <p>menU is a mern application which allows restaurant and cafe owners to easily create, update, monitor and delete their establishment's menus and generate a PDF copy which can be easily uploaded to their website and social media or printed to be used in the establishment. </p>
          </Col>
        </Row>
        <Row>
          <Col size="small-3 cell">
            
          </Col>
        </Row>
      </Container>
    );
  }


export default Home;
