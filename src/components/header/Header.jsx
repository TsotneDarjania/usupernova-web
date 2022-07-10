import React from 'react'
import { useState } from 'react';
import './header.css';


const Header = () => {

  const [showMobileItems, setShowMobileItems] = useState(false);



  return (
    <div className='main-page-header'>
      <nav>
        <div className='main-page-logo'>
          <h2> <span>U</span>supernova </h2>
        </div>
        <ul className={ showMobileItems ? "nav-items" : "nav-items show-mobile-items"}>
          <li>Games</li>
          <li>PlayersLand</li>
          <li>Registration / login</li>
          <li>About us</li>
        </ul>
        <div onClick={() => setShowMobileItems(!showMobileItems)} className={ showMobileItems ? "main-page-hamburger" : "main-page-hamburger main-page-hamburger-close"}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  )
}

export default Header