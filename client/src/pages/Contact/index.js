import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import ContactForm from "../../components/ContactForm";
import Navbar from "../../components/Navbar";
import BlackAndWhitePic from "../images/b&w.jpg";

function Contact(){


    return(
        

        <Container fluid="0">
            <Navbar />
            <Row>
            
                <Col size="small-3 cell">
                </Col>
                <Col size="small-6 cell">
                <h1>Contact Us</h1>
                <ContactForm />
                </Col>
            </Row>
            <Row>
            
            <Col size="small-3 cell">
                </Col>
                <Col size="small-cell-4">
            <img src={BlackAndWhitePic} alt="Looking at menus in restaurant black and white." />
            </Col>
            <Col size="small-3 cell">

                </Col>
            </Row>
        </Container>
        

    )
}

export default Contact;

