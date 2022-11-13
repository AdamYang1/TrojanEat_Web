import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup/Signup'
import Login from './Login/Login'


export default function LandingPage() {
  return (
    <div className='h-full'>
      <BrowserRouter>
        <Routes>
          <Route defaults="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}