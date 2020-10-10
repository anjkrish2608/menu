import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

function UserHome() {
const username="Anjini";
  return (
      <Container >
        <h1>Home</h1>
        <h3> Welcome {username}!</h3>
        <Row>
          <Col size="small-3 cell">

          </Col>
        </Row>
        <Row>
          <Col size="small-3 cell">
            
          </Col>
        </Row>
        <Row>
          <Col size="small-3 cell">
            
          </Col>
        </Row>
      </Container>
    );
  }


export default UserHome;
