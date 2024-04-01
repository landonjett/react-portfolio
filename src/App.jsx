import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Assuming you've created this
import Navigation from './components/Navigation'; // Assuming you've created this
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css'; 


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div id="content"> {/* This div will hold the page content */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
