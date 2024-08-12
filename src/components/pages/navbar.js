// src/components/MainNavbar.js

import React from 'react';
import '../styles/navbar.css'; // Import the CSS file

const MainNavbar = () => {
    return (
      <nav className="main-navbar">
      <div className="logo">
          <a href="/">Rent & Sell</a>
      </div>
      <div className="search-bar-container">
          <input type="text" placeholder="Search for products" className="search-bar search-bar-products" />
          <input type="text" placeholder="Search for locations" className="search-bar search-bar-location" />
          <button className="search-button">Search</button>
      </div>
      <div className="profile-and-sell">
          <button className="sell-button">Sell</button>
          <a href="/profile" className="nav-link">Profile</a>
      </div>
  </nav>
    );
};

export default MainNavbar;