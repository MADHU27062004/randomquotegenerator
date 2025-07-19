// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import QuotePage from './components/QuotePage';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className={`app ${theme}`}>
      <Router>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quotes/:category" element={<QuotePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
