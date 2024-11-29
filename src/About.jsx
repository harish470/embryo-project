// AboutPage.jsx
import React from 'react';
import './About.css'; // Import the CSS file
import Navbar from './components/Nav/Navbar'
const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <h1 className="header">About Us</h1>
      <p className="paragraph">
        Welcome to our website! We are passionate about creating innovative and user-friendly digital solutions.
      </p>
      <p className="paragraph">
        Our mission is to empower individuals and businesses with tools that help them achieve their goals. From web
        design to development, we strive for excellence in everything we do.
      </p>
      <div className="cardContainer">
        <div className="card">
          <h3>Our Vision</h3>
          <p>To be a leader in the tech industry by providing high-quality solutions.</p>
        </div>
        <div className="card">
          <h3>Our Mission</h3>
          <p>Empowering individuals and businesses through technology.</p>
        </div>
        <div className="card">
          <h3>Our Values</h3>
          <p>Integrity, innovation, and customer satisfaction.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
