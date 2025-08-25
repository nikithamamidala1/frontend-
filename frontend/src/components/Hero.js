import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

const images = [
  "https://picsum.photos/id/1018/1600/600",
  "https://picsum.photos/id/1015/1600/600",
  "https://picsum.photos/id/1016/1600/600"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <img src={images[current]} alt="slideshow" className="hero-img" />
      <div className="hero-text">
        <h1>Welcome to Our Website</h1>
        <p>We deliver amazing services for you.</p>
      </div>
    </section>
  );
};

export default Hero;
