import React, { FC, useState } from 'react';
import { Navbar } from './Components/Navbar';
import Home from './pages/Home';
const App:FC  = ()=> {



  return (
    <div className='  w-full h-full'>
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
