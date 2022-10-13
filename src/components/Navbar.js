import React from 'react'
import logo from '../static/coffee-logos.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="link">
          <div className="nav-title">
              <img src={logo} alt="logo" />
              <h4>Coffeeholic</h4>
          </div>
        </Link>
        <ul className="nav-links">
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar