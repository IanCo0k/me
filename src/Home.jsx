import React, { useState } from 'react'
import './style.css';

export default function Home() {
  const [open, setOpen] = useState(false) // change the initial value to false

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (

    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
      
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Book Reviews</li></a>
          <a href="#"><li>Studies</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
      </div>
    </nav>
  )
}
