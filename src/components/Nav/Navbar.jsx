import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (

   <nav className="navbar">
        <div className="logo">EMBRYO</div>
        {/* <div className="menu-toggle" onClick="document.querySelector('.navbar ul').classList.toggle('show')">☰</div> */}
        <ul>
            <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><a href="Platform.html">Platforms</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

  )
}

export default Navbar