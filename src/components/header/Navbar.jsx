import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../../store/auth-context'

export const Navbar = () => {

  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;

  const handleLogout = () => {
    authContext.logout();
  }

  return (
    <nav className="nav"> 
      <Link to="/" className="site-name">
        COFFEE SHOP
        <FontAwesomeIcon icon={faMugHot} style={{marginLeft: "15px"}}/>
      </Link>
      <ul>
        <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'home-style' : 'site-style')}>Home</NavLink></li>
        <li><NavLink to="/menu" className={({ isActive }) => (isActive ? 'home-style' : 'site-style')}>Menu</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive }) => (isActive ? 'home-style' : 'site-style')}>Cart</NavLink></li> 
      </ul>
      { isLoggedIn ? 
      ( <button className="site-button" onClick={handleLogout}>Logout</button> ) 
      : ( <Link to="/login"><button className="site-button">Join Now</button></Link> )
      }
    </nav>
  )
}