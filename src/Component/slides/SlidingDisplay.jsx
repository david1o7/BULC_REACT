import React, { useState, useEffect } from 'react';
import './SlidingDisplay.css';
import "../Lanyard/Lanyard.jsx"
import { Link } from "react-router-dom"
import pic from "../../assets/BULC/1.png"
import pic1 from "../../assets/BULC/3.png"
import pic2 from "../../assets/edusity_assets/leafpic.png"
const SlidingDisplay = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Work Mode",
      subtitle: "Focus. Execute. Repeat.",
      description: "The lanyard that keeps you locked in. Wear it when it's time to grind.",
      image: pic,
    },
    {
      id: 2,
      title: "They Slept, I Worked",
      subtitle: "Let your effort speak.",
      description: "This isn’t just merch — it’s a mindset. Built under life challenges.",
      image: pic1 ,
    },
    {
      id: 3,
      title: "BULC Nation",
      subtitle: "Join the movement.",
      description: "Show the world you're part of something bigger than yourself.",
      image: pic2,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goToPrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="sliding-display dark-theme">
      <div className="sliding-container">
        <div
          className="sliding-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="sliding-slide">
              <div className="sliding-content">
                <div className="sliding-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div className="sliding-text">
                  <h2>{slide.title}</h2>
                  <h3>{slide.subtitle}</h3>
                  <p>{slide.description}</p> 
                  <button
                    className="sliding-cta"
                  >
                    <Link to="/Lanyard">
                    Order Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="sliding-nav sliding-nav-prev" onClick={goToPrevSlide}>
          ‹
        </button>
        <button className="sliding-nav sliding-nav-next" onClick={goToNextSlide}>
          ›
        </button>

        <div className="sliding-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`sliding-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingDisplay;
