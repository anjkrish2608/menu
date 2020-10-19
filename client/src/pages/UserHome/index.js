import React,{useEffect,useState} from "react";
import {useParams } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Table from "../../components/Table";
import API from "../../utils/API";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import style from "./style.css";

function UserHome() {
  // Setting our component's initial state
  const [info, setInfo] = useState([])

  const {id}=useParams();
  // Load all books and store them with setBooks
  useEffect(() => {
    loadInfo(id)
  }, [id])
  function loadInfo(id){
    API.getUser(id)
    .then(res=> setInfo(res.data))
      .catch(err => console.log(err));
  }
  return (
      <Container >
          <Sidebar>
    <SidebarItem  style={style}>   </SidebarItem>
    <SidebarItem >HIIII</SidebarItem>
            </Sidebar>
            <div className="main"> 
            <h1>Home</h1>
        <h3> Welcome {info.username}!</h3>
        <Row>
          
        
          <Col size="small-9 cell">
            <Table />
          </Col>
        </Row>
        <Row>
          <Col size="small-3 cell">
            
          </Col>
        </Row>
            </div>
        
      </Container>
    );
  }


export default UserHome;
