import React from 'react'
import { Routes, Route } from "react-router-dom";

import Homepage from './Homepage'
import Login from './Login'
import About from './About';
function App() {


  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Login />} />
    </Routes>

  )
}

export default App