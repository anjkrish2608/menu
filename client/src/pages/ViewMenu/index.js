import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import API from "../../utils/API";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import Table from "../../components/Table";
import "./style.css";
import UserNavbar from "../../components/UserNavbar";

function ViewMenu() {
  // Setting our component's initial state
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  const { menuID } = useParams();
  var menus = [
    {
      _id: 1,
      user_ID: id,
      menuName: "Bistro Brunch",
      sectionName: "Drinks",
      items: [{ item: "Apple Juice", price: 6 }, { item: "Coffee", price: 5 }]
    },
    {
      _id: 2,
      user_ID: id,
      menuName: "BBQ truck",
      sectionName: "Meats",
      items: [{ item: "Pork ribs", price: 18 }, { item: "4hr Beef rib tacos", price: 15 }]
    }
  ]


  // Load all user info and store w setInfo
  useEffect(() => {
    loadInfo(id);
  }, [id])
  function loadInfo(id) {
    API.getUser(id)
      .then(res => {
        setInfo(res.data);
      })
      .catch(err => console.log(err));
  }
  return (



    <Container >
      <UserNavbar />
      {menus.length ? (
        <Sidebar>
          <SidebarItem />
          <SidebarItem />


          {menus.map(menu => {
            return (<SidebarItem key={menu._id}>
              <Link
                to={"/home/" +  id + "/view/"+menu._id}>
                View {menu.menuName}
              </Link>
            </SidebarItem>)
          })}
          <SidebarItem>
            <Link to={`/home/${id}/create`}> Create New Menu </Link>
          </SidebarItem>
        </Sidebar>
      ) : (
          <Sidebar>
            <SidebarItem />
            <SidebarItem />
            <SidebarItem>
              <Link to={`/home/${id}/create`}> Create Menu </Link>
            </SidebarItem>
          </Sidebar>)}
      <Row>
        <Col size="small-3 cell" />
        <Col size="small-9 cell">
      <h1>{info.username}'s {menus[(menuID-1)].menuName} Menu</h1>
          <Table 
          menuTitle={menus[(menuID-1)].menuName} 
          sectionTitle={menus[(menuID-1)].sectionName}
          items={menus[(menuID-1)].items} />
        </Col>
      </Row>
      <Row>
        <Col size="small-3 cell">

        </Col>
      </Row>

    </Container>
  );
}


export default ViewMenu;
