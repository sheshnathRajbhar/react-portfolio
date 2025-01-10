import React from 'react'
import "./Navbar.css"
import menu from "../../assets/menu.png"
const Navbar = () => {

 


  return (
    
      <nav className="navbar">
        <div className="navbar__logo"><span>Shes</span>nath<span>Raj</span>bhar</div>
        <ul className="navbar__menu" id="navbar-menu">
           
            <li className="navbar__menu__item"><a href="#about">About</a></li>
            <li className="navbar__menu__item"><a href="#service">Services</a></li>
            <li className="navbar__menu__item"><a href="#projects">Projects</a></li>
        </ul>
        <img src={menu} id="toggle-btn" style={{width:'40px'}}/>
    </nav>
   
  )
}

export default Navbar