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
  const [menus, setMenuInfo] = useState([])


  const { id } = useParams();
  //const { menuId } = useParams();
  // Load all user info and store w setInfo
  useEffect(() => {
    loadInfo(id);
  },[id])
  function loadInfo(id) {
    API.getUser(id)
      .then(res => {
        setInfo(res.data);
        API.findMenus(id)
          .then(res => {
            setMenuInfo(res.data);
            console.log(menus);
          })
      })
      .catch(err => console.log(err));
  }
  return (



    // <Container >
    //   <UserNavbar />
    //   {menus.length ? (
    //     <Sidebar>
    //       <SidebarItem />
    //       <SidebarItem />
    //       <div>
    //       {menus.map(menu => (
             
    //         <SidebarItem key={menu._id}>
    //           <Link 
    //           to={`/home/${id}/menu/${menu._id}`}> 
    //           View{menu.menuName}
    //           </Link>
    //         </SidebarItem>
    //       ))}
    // </div>
    //       <SidebarItem>
    //         <Link to={`/home/${id}/create`}> Create New Menu </Link>
    //       </SidebarItem>
    //     </Sidebar>
    //   ) : (
    //     <Sidebar>
    //     <SidebarItem />
    //     <SidebarItem />
    //     <SidebarItem>
    //       <Link to={`/home/${id}/create`}> Create Menu </Link>
    //     </SidebarItem>
    //   </Sidebar>)}
    //   <Row>
    //     <Col size="small-3 cell" />
    //     <Col size="small-9 cell">
    //       <h1>Home</h1>
    //       <h3> Welcome {info.username}!</h3>

    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col size="small-3 cell">

    //     </Col>
    //   </Row>

    // </Container>


    <Container >
      <UserNavbar />
      
     
         <Sidebar>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem>
          <Link to={`/home/${id}/create`}> Create Menu </Link>
        </SidebarItem>
      </Sidebar> 
      <Row>
        <Col size="small-3 cell" />
        <Col size="small-9 cell">
          <h1>Home</h1>
          {info.length ? (
                <div>Loading page..</div>
              ) : (
                <h3> Welcome {info.username}!</h3>
              )}
              {JSON.stringify(menus.data)}
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
