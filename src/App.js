import React, { useCallback } from 'react';
import './App.css';
import Nav from './Nav';
import About from './components/About-us';
import Testimonial from './components/Testimonial';
import Donate from './components/Donate';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Routes >
        <Route path="/Components/Home" exact element={<Home />} />
        <Route path="/Components/About-us" exact element={<About />} />
        <Route path="/Components/Testimonial" exact element={<Testimonial />} />
        <Route path="/Components/Donate" exact element={<Donate />} />
      </Routes>
    </BrowserRouter>

  )
}


export default App;
