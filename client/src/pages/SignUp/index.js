import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Cols from "../../components/Col";
import SignUpForm from "../../components/SignUpForm";
import Navbar from "../../components/Navbar";

function SignUp(){

    return(
<div>
<Navbar />
        <Container >
            <Row>
                <Cols size="small-3 cell">
                </Cols>
                <Cols size="small-6 cell">
            <h1>Sign Up!</h1>
                <SignUpForm />
                </Cols>
            </Row>
        </Container>
</div>
        

    )
}

export default SignUp;

