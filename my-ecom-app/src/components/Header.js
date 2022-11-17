import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/name.png"
import "./Header.css"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className='header-div'>
    <NavLink to="/">
        <img src={logo} alt='logo'/>
    </NavLink>
    <Nav />

    </div>
    
  )
}

export default Header