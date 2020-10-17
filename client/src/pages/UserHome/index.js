import React,{useEffect,useState} from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Table from "../../components/Table";
import API from "../../utils/API";
import Sidebar from "../../components/Sidebar";
function UserHome() {
  // Setting our component's initial state
  const [info, setInfo] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadInfo()
  }, [])
  function loadInfo(){
    API.getUsers()
    .then(res=> setInfo(res.data))
      .catch(err => console.log(err));
  }
  return (
      <Container >
          <Sidebar />
        <h1>Home</h1>
        <h3> Welcome {info.username}!</h3>
        <Row>
          <Col size="small-3 cell">

          </Col>
        
          <Col size="small-9 cell">
            <Table />
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
