import React, { useState } from 'react';
import './Carousel.css'; // Import CSS for styling



const Carousel = (props) => {
    const images = [
        props.img1,
        props.img2,
        props.img3,
        props.img4
      ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container" style={{ width: '80vw', height: '70vh' }}>
      <button onClick={prevSlide}>&lt; Prev</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={nextSlide}>Next &gt;</button>
    </div>
  );
};

export default Carousel;
