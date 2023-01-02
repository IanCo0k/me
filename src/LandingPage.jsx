import React, { useState } from 'react'
import headshot from './assets/headshot.jpeg';
import Overlay from './Overlay';
import './style.css';

export default function LandingPage() {

  return (
    <div className="container">
        
        <Overlay/>

      <div className="content">
        <div className="img">
          <img src={headshot} alt="" />
        </div>
        <div className="heading">
          <h1>Hi, I'm Ian Cook</h1>
        </div>

        <div className="cta">
          <h3>Hi love :) click buttons and tell me what breaks. I love you.</h3>
          <a href="/#/blogs"><button>READ</button></a>
        </div>
      </div>

    </div>
  )
}
