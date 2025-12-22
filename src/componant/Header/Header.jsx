import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className="header-parent parent">
        <div className="header-cont cont">
          <Link to="/" className="logo">
            <h3>LOGO</h3>
          </Link>
          <div className="menu">
            <p>Home</p>
            <p>About</p>
            <p> Services</p>
            <p>Portfolio</p>
            <p>Blog</p>
            <p>Contact</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Header
