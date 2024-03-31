import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Temporary component for testing
function TempTest() {
  return (
    <div>
      <h1>This is a Test</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> 
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/test" element={<TempTest />} /> // Test route added
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
