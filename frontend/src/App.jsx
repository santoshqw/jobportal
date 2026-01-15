import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';

const App = () => {
  return (
   <>
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
   
   </>
  )
}

export default App