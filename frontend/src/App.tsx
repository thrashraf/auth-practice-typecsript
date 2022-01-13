import React, { FC } from 'react';
import { Navbar } from './Components/Navbar';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App:FC  = ()=> {



  return (
    <div className='  w-full h-full'>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
