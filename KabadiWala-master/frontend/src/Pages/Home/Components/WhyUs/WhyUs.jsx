import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  const features = [
    {
      title: "Best Rates",
      description:
        "We provide the best value for your scrap from our network of Recyclers.",
      icon: "💵",
    },
    {
      title: "Convenience",
      description:
        "Doorstep pickup according to user's convenient date & time.",
      icon: "👍",
    },
    {
      title: "Trust",
      description:
        "Trained & Verified Pickup Staff with Swapeco Smart Weighing Scale.",
      icon: "🛡️",
    },
    {
      title: "Eco-friendly",
      description:
        "We ensure responsible recycling of your scrap items.",
      icon: "🌱",
    },
  ];

  return (
    <div className="why-us-container">
      <h2 className="why-us-title">Why Us</h2>
      <p className="why-us-description">
        The "Sell Your Waste at Your Doorstep" project offers the best rates, ensuring that recycling is both profitable and easy. With a focus on convenience and reliability, we bring trusted recycling solutions directly to your door, supporting a sustainable, circular economy.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
