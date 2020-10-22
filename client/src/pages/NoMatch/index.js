import React from "react";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";

function NoMatch() {
  return (
    <div>
      <Navbar />
    <Container fluid>
      <Row>
        <Col size="small-6 cell">
          <Wrapper>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Wrapper>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default NoMatch;
