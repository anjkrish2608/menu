import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Navbar from "../../components/Navbar";
import MenuPic from "../images/order.jpg";
import "./style.css";
function Home() {

  return (
    <div>
      <Navbar />
      <Container>

        <Row>
          <Col size="small-3 cell">
            <span className="spaceHere">    </span>
          </Col>

        </Row>
        <Row>
          <Col size="small-3 cell">
            <img src={MenuPic} alt="Waitor taking order from table." />
          </Col>
          <Col size="small-6 cell">
            <p className="slogan">
              Sick and tired of keeping track whats on your restaurant's menu? Struggling to maintain an updated menu on your social media or printed in your establishment? Or are you concerned that as technology trends evolve you are falling behind?
            <br />menU is perfect for you!
            </p>
            <br />
            <br />
            <p>menU is a mern application which allows restaurant and cafe owners to easily create, update, monitor and delete their establishment's menus and generate a PDF copy which can be easily uploaded to their website and social media or printed to be used in the establishment. </p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}


export default Home;
