// About.js
import React from 'react';
import './About.css';
import arrive from "../../../../Assets/arrive.png"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Side - Text */}
        <div className="about-text">
          <h1>About</h1>
          <p>
            This project is a digital platform designed to make recycling more
            accessible by allowing users to sell recyclable waste directly from
            their homes or businesses. The goal is to create a streamlined,
            user-friendly system that connects people looking to dispose of
            waste sustainably with local scrap dealers who specialize in
            recycling.
          </p>
          <p>
            By using this platform, individuals can contribute to environmental
            conservation, earn money from recyclable materials, and promote a
            circular economy where materials are reused and repurposed.
          </p>
        </div>
        {/* Right Side - Image */}
        <div className="about-image">
          <img src={arrive} alt="Recycling Illustration" />
        </div>
      </div>
    </div>
  );
};

export default About;
