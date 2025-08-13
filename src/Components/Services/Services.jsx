import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Future Insights",
      description: "Gain clarity about your path ahead with detailed tarot readings focused on your future possibilities and potential outcomes.",
      icon: "🔮"
    },
    {
      title: "Career & Finance Reading",
      description: "Navigate your professional life and financial decisions with guidance tailored to your unique situation.",
      icon: "💰"
    },
    {
      title: "Love & Relationship Reading",
      description: "Explore the dynamics of your relationships and receive insights into matters of the heart.",
      icon: "💖"
    },
    {
      title: "Chakra Guidance & Healing",
      description: "Balance your energy centers with personalized chakra readings and healing suggestions.",
      icon: "🌀"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;