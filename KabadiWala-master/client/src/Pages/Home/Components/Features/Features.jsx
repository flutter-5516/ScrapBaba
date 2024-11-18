import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-section">
      <div className="features-heading">
        <h2>FEATURES</h2>
        <p>
          The "Sell Your Waste at Your Doorstep" project aims to make recycling effortless and rewarding, fostering a culture of environmental responsibility and supporting a circular economy. This platform has the potential to make a meaningful difference by simplifying the recycling process, providing financial incentives, and empowering communities to actively participate in waste reduction and resource conservation.
        </p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">01</div>
          <h4>User-Friendly Interface</h4>
          <p>
            Allows users to upload photos and descriptions of their waste materials with ease.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">02</div>
          <h4>Waste Type and Quantity Input</h4>
          <p>
            Users can specify waste types, such as plastic, metal, paper, or electronic waste, along with the quantity.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">03</div>
          <h4>Local Dealer Network</h4>
          <p>
            Only nearby dealers are notified, reducing transportation needs and supporting local businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
