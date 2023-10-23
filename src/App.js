import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './context/AuthContext';

// src/App.js
import React from 'react';
import AppRoutes from './routes';
import Navbar from './components/Header/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar /> 
      <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
