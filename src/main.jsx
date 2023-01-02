import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Home/>
    </HashRouter>
)
