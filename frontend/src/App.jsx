import React from "react";
import Navbar from "./Component/Navbar.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./Component/Pages/Home.jsx";
import Jobs from "./Component/Pages/Jobs.jsx";
import About from "./Component/Pages/About.jsx";
import Contact from "./Component/Pages/Contact.jsx";
import Login from "./Component/Pages/Login.jsx";
import Register from "./Component/Pages/Register.jsx";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
