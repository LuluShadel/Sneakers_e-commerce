import React, { useState } from 'react';
import { motion} from 'framer-motion';
import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";
import arrowLeft from "../assets/icon-previous.svg";
import arrowRight from "../assets/icon-next.svg";

const images = [img1, img2, img3, img4];

const transition = { duration: 0.5, ease: 'easeInOut' };




const Carousel = ({cart}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (slideIndex) => {
    setCurrentSlide((slideIndex + images.length) % images.length);
  };

  const changeSlide = (n) => {
    showSlide(currentSlide + n);
  };

  return (
    <div className="relative z-0 mt-4">
      
        <div>
          <motion.img
            key={currentSlide}
            className="w-full h-25"
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
          />
        </div>
      
      <div
        className="absolute top-1/2 cursor-pointer left-0 rounded-full bg-white p-3 ml-2"
        onClick={() => changeSlide(-1)}
        >
        <img className='' src={arrowLeft} alt='fleche' />
      </div>
      <div 
      className="absolute top-1/2 cursor-pointer right-0 rounded-full bg-white p-3 ml-2"
      onClick={() => changeSlide(1)} 
      >
        <img src={arrowRight} alt='fleche' />
      </div>

      {cart&&(
        <div className='absolute top-0 left-1/2 z-30 bg-white w-[95%] h-3/4 mt-1 -translate-x-1/2 rounded-lg  '>
          <div className='border-b-2 border-slate-200 p-5'>
          <p className='font-bold'>Cart</p>
          </div>
          <div className=' h-3/4 flex items-center justify-center'>
          <p className='text-center text-slate-500 font-bold '>Your cart is empty.</p>
          </div>
          </div>
      )}
    </div>
  );
};

export default Carousel;