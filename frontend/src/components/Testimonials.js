import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", text: "Amazing service! Highly recommend." },
    { name: "Jane Smith", text: "Great experience working with the team." },
    { name: "Mike Johnson", text: "Professional and reliable." }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial">
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
