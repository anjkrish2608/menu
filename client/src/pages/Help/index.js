import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Navbar from "../../components/Navbar";
import FoodPic from "../images/foodAndMenus.jpg";
import reactElementToJSXString from 'react-element-to-jsx-string';
import "./style.css";

function Help() {

  return (

    
      
      <Container>
      <Navbar />
        <Row>
          <Col size="small-3 cell">
            <img src={FoodPic} alt="Food and menus displayed on table." />
            
          </Col>
          <Col size="small-9 cell aboveFooter">
          <h1>FAQ!</h1>
            <h3>Generate PDF menU</h3>
            <ol>
              <li>Sign up with menU and input your menu items and prices!</li>
                <br />
              <li>Click the Generate PDF button next to the menu you want generated.</li>
                <br />
              <li>Check your downloads folder on your brower or desktop.</li>
                <br />
              <li> Open the file named "(yourMenuName)menU.pdf" and use how you please.</li>
            </ol>
            <br />
            <h3>Link menU to website</h3>
            <ol>
              <li>Sign up with menU, input your menu information as required and generate the PDF.</li>
              <br />
              <li>Include the PDF in your website's directory.</li>
              <br />
              <li>Paste the first line of code on the webpage where you want the menu to be accessed:
                <br />
                
                  <code>
                {reactElementToJSXString(<a href="filePath/(yourMenuName)menU.pdf" 
                     target="_blank">
                      <i class="far fa-file"></i>
                      View Our Menu
                  </a>)}
          <br />
          <br />
                  {reactElementToJSXString(<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>)}
                  </code>
                <br />
              Then paste the second piece inside the head of the html file to use the FontAwesome icon.<br /> Use the following link from W3Schools.com for assitance in writing the filepath <a href="https://www.w3schools.com/html/html_filepaths.asp" rel="noopener noreferrer" target="_blank">click here</a>.
              </li>
              <li> Update your website to display these changes.</li>
            </ol>
          <br />
            <h3>Display menU on social media</h3>
            <h5>Facebook</h5>
              <p> After generating the PDF use these steps from Chron to include your menU on your facebook page <a href="https://help.instagram.com/362497417173378?helpref=search&sr=1&query=Where+can+I+see+recent+photos+and+videos+I%27ve+liked%3F" rel="noopener noreferrer" target="_blank">click here</a>.</p>
              <h5>Instagram</h5>
              <ol>
              <li> Post your menU PDF to either your facebook or website. </li>
              <li> Get the link to view your menU PDF. </li>
              <li> Follow these steps provided by instagram: <a href="https://help.instagram.com/362497417173378?helpref=search&sr=1&query=Where+can+I+see+recent+photos+and+videos+I%27ve+liked%3F" rel="noopener noreferrer" target="_blank">click here</a>.</li>
              </ol>
          </Col>
        </Row>
      </Container>
   
    );
  }


export default Help;
