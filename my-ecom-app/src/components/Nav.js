import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"
import {CgShoppingCart} from "react-icons/cg"


const Nav = () => {

  return (
    <div>
        <ul className='navbar-lists'>
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
                <CgShoppingCart className='cart-trolley'/>
                <span className="cart-total--item"> 10 </span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/cart' className="navbar-link">
                <button>
                    Login/Signup
                </button>
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav