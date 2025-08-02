// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import AboutShojib from './pages/AboutShojib';
import Layout from './Layout';
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/shojib" element={<AboutShojib />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
