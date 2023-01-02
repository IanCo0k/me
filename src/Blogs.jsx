import React from 'react'
import Overlay from './Overlay';
import hi from './assets/hi.png';
import headshot from './assets/headshot.jpeg';
import './style.css';

export default function Blogs() {
  return (
    <div className='container'>
        <Overlay/>
        
        <h1>January</h1>
        <div class="calendar">
            <div class="day post">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div class="day">31</div>
        </div>

        <div className="legend">
            <div className="row">
                <div className="green"></div>
                <div><p>- blog was posted on this day.</p></div>
            </div>
            <div className="row">
                <div className="empty"></div>
                <div><p> - no blog post on this day.</p></div>
            </div>
        </div>

    </div>
  )
}
