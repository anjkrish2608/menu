import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import API from "../../utils/API";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import "./style.css";
import UserNavbar from "../../components/UserNavbar";

function UserHome() {
  // Setting our component's initial state
  const [info, setInfo] = useState([])

  const { id } = useParams();
  const { menuId } = useParams();
  // Load all user info and store w setInfo
  useEffect(() => {
    loadInfo(id);
  }, [id])
  function loadInfo(id) {
    API.getUser(id)
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }
  return (
    <div>

<UserNavbar />
    <Container >
      <Sidebar>
        <SidebarItem >   </SidebarItem>
        <SidebarItem />
        <SidebarItem>
          <Link to={`/home/${id}/menu/${menuId}`}> View </Link>
        </SidebarItem>
        <SidebarItem>
          <Link to={`/home/${id}/create`}> Create Menu </Link>
        </SidebarItem>
      </Sidebar>
      <Row>
        <Col size="small-3 cell" />
        <Col size="small-9 cell">
          <h1>Home</h1>
          <h3> Welcome {info.username}!</h3>
        
        </Col>
      </Row>
      <Row>
        <Col size="small-3 cell">

        </Col>
      </Row>

    </Container>
    </div>
  );
}


export default UserHome;
