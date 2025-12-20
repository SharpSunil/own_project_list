import React from 'react'
import './header.scss'
const Header = () => {
  return (
    <>
      <div className="header-parent parent">
        <div className="header-cont cont">
          <div className="logo">
            <h3>LOGO</h3>
          </div>
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
