import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, } from 'react-router-dom';
import './index.css';


import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        
      </Routes>
    </Router>
    
  </React.StrictMode>
);

