import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Cols from "../../components/Col";
import SignUpForm from "../../components/SignUpForm";


function SignUp(){

    return(

        <Container >
            <h1>Sign Up!</h1>
            <Row>
                <Cols size="small-3 cell">
                </Cols>
                <Cols size="small-6 cell">
                <SignUpForm />
                </Cols>
            </Row>
        </Container>

    )
}

export default SignUp;

