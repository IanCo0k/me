import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './LandingPage'
import Blogs from './Blogs';
import January1 from './January1';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/jan1" element={<January1/>}/>
        </Routes>
    </Router>
    </React.StrictMode>
)
