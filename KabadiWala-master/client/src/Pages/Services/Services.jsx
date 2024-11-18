// Services.jsx
import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Scrap Collection",
      description:
        "We offer reliable and hassle-free scrap collection services to help you declutter your space. Our team ensures timely pickup and responsible recycling of all types of scrap materials, including metal, plastic, and electronic waste. Let us assist you in keeping your environment clean and sustainable!",
      icon: "♻️",
    },
    {
      title: "Paper Shredding",
      description:
        "Our secure paper shredding service helps you dispose of confidential documents safely and responsibly. From personal to corporate papers, we ensure 100% confidentiality and compliance with recycling standards. Trust us for an eco-friendly and secure shredding solution!",
      icon: "📄",
    },
    {
      title: "Waste Collection",
      description:
        "We provide comprehensive waste collection services for households, offices, and industries. Our eco-conscious approach ensures that your waste is handled and recycled efficiently. Partner with us to minimize your environmental footprint and promote sustainable waste management practices.",
      icon: "🚮",
    },
    {
      title: "Society Tie-ups",
      description:
        "Collaborate with us to implement society-wide waste management solutions. From recycling programs to regular waste pickups, we offer tailored solutions to suit the unique needs of residential communities. Together, we can create a cleaner and greener living environment for everyone.",
      icon: "🏢",
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
