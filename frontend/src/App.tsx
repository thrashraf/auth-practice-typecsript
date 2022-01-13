import React, { FC, useState } from 'react';
import { Navbar } from './Components/Navbar';
import Home from './pages/Home';
import { Login } from './pages/Login';

const App:FC  = ()=> {



  return (
    <div className='  w-full h-full'>
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
