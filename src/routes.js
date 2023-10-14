// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './components/Auth/Login';
import UserProfile from './pages/UserProfile';

const AppRoutes = () => {
  return (
    
    <Routes> {/* Use Routes instead of Switch */}
    <Route path="/" element={<Home />} /> {/* Use "element" prop */}
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/profile" element={<UserProfile/>} />
    </Routes>

  );
};

export default AppRoutes;
