import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <nav className="nav"> 
      <Link to="/" className="site-name">
        COFFEE SHOP
        <FontAwesomeIcon icon={faMugHot} style={{marginLeft: "15px"}}/>
      </Link>
      <ul>
        <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'home-style' : 'site-style')}>Home</NavLink></li>
        <li><NavLink to="/menu" className={({ isActive }) => (isActive ? 'home-style' : 'site-style')}>Menu</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'home-style' : 'site-style')}>About</NavLink></li> 
      </ul>
      <button className="site-button">Join Now</button>
    </nav>
  )
}