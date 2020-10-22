import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import FontAwesome from 'react-fontawesome';

function Footer() {
  return (
    <footer className="mobile-bottom-bar">
      
        <span className="bigSpace">   </span>
        
        <span className="bigSpace">   </span>
        
        <span className="footer-text menuName">
          menU </span>
          <FontAwesome className="fas fa-utensils icon" />
        
        <Link to="/"><span className="footer-link">Home</span></Link>
       
        <Link  to="/contact"><span className="footer-link">Contact</span></Link>
        
        <Link to="/help"><span className="footer-link">Help</span></Link>
      
      </footer>
  );
}

export default Footer;
