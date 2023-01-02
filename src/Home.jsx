import React from 'react'
import LandingPage from './LandingPage'
import Blogs from './Blogs';
import { Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </div>
  )
}
