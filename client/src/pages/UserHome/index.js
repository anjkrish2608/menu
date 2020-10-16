import React,{useEffect,useState} from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import API from "../../utils/API";

function UserHome() {
  // Setting our component's initial state
  const [info, setInfo] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadInfo()
  }, [])
  function loadInfo(){
    API.getUser()
    .then(res=> setInfo(res.data))
      .catch(err => console.log(err));
  }
  return (
      <Container >
        <h1>Home</h1>
        <h3> Welcome {info.username}!</h3>
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
