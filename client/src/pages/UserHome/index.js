import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  const { id } = useParams();
  // Load all user info and store w setInfo
  useEffect(() => {
    loadInfo(id)
  }, [id])
  function loadInfo(id) {
    API.getUser(id)
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }
  return (
    <Container >
      <Sidebar>
        <SidebarItem style={style}>   </SidebarItem>
        <SidebarItem />
        
      </Sidebar>
      <Row>
        <Col size="small-3 cell" />
        <Col size="small-9 cell">
          <h1>Home</h1>
          <h3> Welcome {info.username}!</h3>
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
