import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './LandingPage'
import Blogs from './Blogs';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
    </Router>
    </React.StrictMode>
)
