import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Cols from "../../components/Col";
import ContactForm from "../../components/ContactForm";

function SignIn(){


    return(

        <Container>
<h1>Sign In!</h1>
            <Row>
                <Cols size="small-3 cell">
                </Cols>
                <Cols size="small-6 cell">

                <ContactForm />
                </Cols>
            </Row>
        </Container>

    )
}

export default SignIn;

