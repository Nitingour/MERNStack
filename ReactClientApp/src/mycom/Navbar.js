import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import '../Navbar.css';

function Navbar(){
    return (
      <nav>
      <div className="nav-wrapper" style={{background:"#000000"}}>
        <a href="#" className="brand-logo">EMS</a>
        <ul id="nav-mobile" className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>
    </nav>
           );

}

export default Navbar;
