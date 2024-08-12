import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Quicklinks from "./quicklinks";
import backgroundImage1 from "../images/pexels-ajlobo-1205022.jpg";
import backgroundImage2 from "../images/pexels-pixabay-276510.jpg"; 
import backgroundImage3 from "../images/pexels-suzyhazelwood-1122865.jpg"; 
import "../styles/home.css";
import { Link } from 'react-router-dom'; // Import Link for navigation

const images = [backgroundImage1, backgroundImage2, backgroundImage3]; // Array of images

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <Quicklinks />

      <div id="homepage">
        <div id="tagline">
          <h1>"Your One-Stop Solution for All Your Needs"</h1>
          <h3>
            "Discover the easiest way to find or list items and services. Your
            One-Stop Solution for All Your Rental, Selling, and Hiring Needs."
          </h3>
          <Link to="/products" className="get-started-button">Get Started</Link> {/* Get Started Button */}
        </div>

        <div id="homeimage" className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index + 1}`}
              className="background-image"
              style={{
                opacity: currentImageIndex === index ? 1 : 0,
                width: '100%',
                height: '100%'
              }}
            />
          ))}
        </div>
     
      </div>
      <div className="banner-ad">

</div>
    </>
  );
};

export default HomePage;
