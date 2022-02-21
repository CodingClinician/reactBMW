import React from 'react';
import "../App.css";
import {Link} from 'react-router-dom'



function Navbar() {
  return (
    <nav className='navbar'>
        <h3>Logo</h3>
        <Link to="/"> Home</Link>
        <Link to="/About"> About</Link>
        <Link to="/Calendar"> Calendar</Link>
        
        
    </nav>
  )
}

export default Navbar;