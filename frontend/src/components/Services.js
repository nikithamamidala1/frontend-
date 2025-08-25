import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">Web Development</div>
        <div className="card">App Development</div>
        <div className="card">Digital Marketing</div>
      </div>
    </section>
  );
};

export default Services;
