// src/components/QuickLinksNavbar.js

import React from 'react';
import '../styles/navbar.css'; // Import the CSS file

const QuickLinksNavbar = () => {
    return (
        <nav className="quick-links-navbar">
            <ul className="quick-links-list">
                <li>All Categories</li>
                <li><a href="/cars">Cars</a></li>
                <li><a href="/motorcycles">Motorcycles</a></li>
                <li><a href="/mobile-phones">Mobile Phones</a></li>
                <li><a href="/houses-apartments-sale">For Sale: Houses & Apartments</a></li>
                <li><a href="/scooters">Scooters</a></li>
                <li><a href="/commercial-vehicles">Commercial & Other Vehicles</a></li>
                <li><a href="/houses-apartments-rent">For Rent: Houses & Apartments</a></li>
            </ul>
        </nav>
    );
};

export default QuickLinksNavbar;
