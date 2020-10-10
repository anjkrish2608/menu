import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import ContactForm from "../../components/ContactForm";

function Contact(){


    return(

        <Container fluid="0">
            <Row>
            <h1>Contact Us</h1>
                <Col size="small-3 cell">
                </Col>
                <Col size="small-6 cell">
                
                <ContactForm />
                </Col>
            </Row>
        </Container>

    )
}

export default Contact;

