import React, { FC, useEffect } from 'react';
import { Navbar } from './Components/Navbar';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

const App:FC  = ()=> {

  useEffect(() => {

    axios.get('http://localhost:5000/auth/login/success', {withCredentials: true})
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
  }, [])

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
