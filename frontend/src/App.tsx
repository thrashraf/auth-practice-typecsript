import React, { FC, useEffect, useState } from 'react';
import { Navbar } from './Components/Navbar';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import UserContext from './UserContext'



const App:FC  = ()=> {

  const [user, setUser] = useState({})

  useEffect(() => {

    axios.get('http://localhost:5000/auth/login/success', {withCredentials: true})
    .then(res => {

      setUser(res.data.user)
    })
    .catch(err => console.log(err))
    
  }, [])

  return (
    <div className='  w-full h-full'>
      <BrowserRouter>
      <UserContext.Provider value={user} > 
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
