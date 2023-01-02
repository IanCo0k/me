import React, {useState} from 'react'
import headshot from './assets/headshot.jpeg';
import './style.css';

export default function Overlay() {

    const [open, setOpen] = useState(false) // change the initial value to false

    const toggleMenu = () => {
      setOpen(!open)
    }
  return (
    <div>
        <div className={open ? 'overlay on' : 'overlay'}>
        <div className="menu">
            <div><h1><a href="/">HOME</a></h1></div>
            <div><h1><a href="/#/blogs">READ</a></h1></div>
            <div><h1><a href="mailto: ianscook19@gmail.com">CONTACT</a></h1></div>
        </div>
    </div>


    <div className="hamburger" onClick={toggleMenu}>
        <div className={open ? 'line1 active': 'line1'}></div>
        <div className={open ? 'line2 active': 'line2'}></div>
        <div className={open ? 'line3 active': 'line3'}></div>
    </div>

    <div className="profile">
      <a href="/"><img src={headshot} alt="" /></a>
    </div>
  </div>
  )
}
