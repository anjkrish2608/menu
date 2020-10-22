import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Cols from "../../components/Col";
import SignInForm from "../../components/SignInForm";
import Navbar from "../../components/Navbar";
function SignIn(){


    return(
<div>
<Navbar />
        <Container>
            <Row>
                <Cols size="small-3 cell">
                </Cols>
                <Cols size="small-6 cell">
                <h1>Sign In!</h1>
                <SignInForm />
                </Cols>
            </Row>
        </Container>
</div>


    )
}

export default SignIn;

