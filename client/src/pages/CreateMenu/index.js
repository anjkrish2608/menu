import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import API from "../../utils/API";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import DefaultTable from "../../components/DefaultTable";
import "./style.css";
import UserNavbar from "../../components/UserNavbar";

function UserHome() {
  // Setting our component's initial state
  const [info, setInfo] = useState([])
  const [menus, setMenuInfo] = useState([])


  const { id } = useParams();
  //const { menuId } = useParams();
  // Load all user info and store w setInfo
  useEffect(() => {
    loadInfo(id);
  }, [id])
  function loadInfo(id) {
    API.getUser(id)
      .then(res => {
        setInfo(res.data);
        API.findMenus(id).then(res => setMenuInfo(res.data))
      })
      .catch(err => console.log(err));
  }
  return (



    <Container >
      <UserNavbar />
      
        <Sidebar>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem>
          <Link to={`/home/${id}/create`}> Create New Menu </Link>
        </SidebarItem>
        <SidebarItem> Bistro Brunch</SidebarItem>
        <SidebarItem> BBQ truck</SidebarItem>
        <SidebarItem />
      </Sidebar>
      <Row>
        <Col size="small-3 cell" />
        <Col size="small-9 cell">
          <h1>Create menu</h1>
          <h3> We're excited to see your new menu, {info.username}!</h3>
        <DefaultTable />
        </Col>
      </Row>
      

    </Container>
    
  );
}


export default UserHome;
