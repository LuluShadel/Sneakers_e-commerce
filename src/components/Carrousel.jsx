import React, { useState } from 'react';
import { motion} from 'framer-motion';
import img1 from "../assets/image-product-1.jpg";

import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";
import arrowLeft from "../assets/icon-previous.svg";
import arrowRight from "../assets/icon-next.svg";

import Cart from './Cart';


const images = [img1, img2, img3, img4];

const transition = { duration: 0.5, ease: 'easeInOut' };




const Carousel = ({cart,addCart,title,newPrice,setAddCart}) => {

  // carrousel
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
        className="absolute top-1/2 cursor-pointer left-0 rounded-full bg-white p-3 ml-4 md:hidden"
        onClick={() => changeSlide(-1)}
        >
        <img src={arrowLeft} alt='fleche' />
      </div>
      <div 
      className="absolute top-1/2 cursor-pointer right-0 rounded-full bg-white p-3 mr-4 md:hidden"
      onClick={() => changeSlide(1)} 
      >
        <img src={arrowRight} alt='fleche' />
      </div>
      <div className=' block md:hidden '>
      <Cart
      cart={cart}
      setAddCart={setAddCart}
      addCart={addCart}
      title={title}
      newPrice={newPrice}

       />
      </div>
    </div>
  );
};

export default Carousel;