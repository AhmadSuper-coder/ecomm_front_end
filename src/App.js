import logo from './logo.svg';
import './App.css';


// src/App.js
import React from 'react';
import AppRoutes from './routes';
import Navbar from './components/Header/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <AppRoutes />
    </div>
  );
}

export default App;
