import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"
const Nav = () => {
  return (
    <div>
        <ul className='nav-list'>
            <li>
                <NavLink to='/' className="navbar-link">Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className="navbar-link">About</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className="navbar-link">Contact</NavLink>
            </li>
            <li>
                <NavLink to='/products' className="navbar-link">Products</NavLink>
            </li>
            <li>
                <NavLink to='/cart' className="navbar-link">

                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav