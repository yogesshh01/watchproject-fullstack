import React from 'react'
import { ShoppingCart, CircleUserRound, Menu, X } from "lucide-react";
import './Copynavbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Copynavbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    

  return (
    <>
      <nav className="navbar">
        <div className="logo">SmartStore</div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {/* <li ><Link to='/'>Home</li></Link> */}
          <li className='navbarlink'><Link to="/">Home</Link></li>
          {/* <li>All Watches</li> */}
          <li className='navbarlink'><Link to="/Allwatches">Allwatches</Link></li>

          <li className='navbarlink'><Link to="/Contact">Contact us</Link></li>
          
          <li className='navbarlink'><Link to="/Myorder">Myorder</Link></li>
          
        <Link to="/Cart">
          <li><ShoppingCart /></li></Link>
          
        <Link  to='/Signup'>  <li className="account">
            
            <CircleUserRound /> 

          </li></Link>
         
        </ul>
      </nav>
    </>
  )
}

export default Copynavbar
