import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1 className="website-logo-text">Brisphere</h1>
      </div>
      <ul className="header-list">
        <li className="list-items">
          Discover
        </li>
        <li className="list-items">
          Services
        </li>
        <li className="list-items">
          About Us
        </li>
      </ul>
    </div>
  )
}

export default Header