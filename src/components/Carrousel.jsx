import React, { useState } from 'react';
import img1 from "../assets/image-product-1.jpg"
import img2 from "../assets/image-product-2.jpg"
import img3 from "../assets/image-product-3.jpg"
import img4 from "../assets/image-product-4.jpg"
import arrowLeft from "../assets/icon-previous.svg"
import arrowRight from "../assets/icon-next.svg"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    img1,
    img2,
    img3,
    img4
    
  ];

  const showSlide = (slideIndex) => {
    if (slideIndex >= images.length) {
      setCurrentSlide(0);
    } else if (slideIndex < 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(slideIndex);
    }
  };

  const changeSlide = (n) => {
    showSlide(currentSlide + n);
  };

  return (
    <div className="relative">
      <div className="carousel">
        <img className='w-full h-25' src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <div className="absolute top-1/2 cursor-pointer  left-0 rounded-full bg-white p-3 ml-2" onClick={() => changeSlide(-1)}>
    <img className='' src={arrowLeft} alt='fleche' />
  </div>
  <div className="absolute top-1/2 cursor-pointer right-0 rounded-full bg-white p-3 ml-2" onClick={() => changeSlide(1)}>
    <img src={arrowRight} alt='fleche' />
  </div>
    </div>
  );
};

export default Carousel;