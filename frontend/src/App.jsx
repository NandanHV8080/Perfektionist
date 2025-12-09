// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Pages from './pages/index.jsx'
import Footer from './components/layout/Footer/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      {/* Navigation bar is always visible at top */}
      <Navbar />
      <Pages />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
