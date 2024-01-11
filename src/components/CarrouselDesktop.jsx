import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";

import small_img1 from "../assets/image-product-1-thumbnail.jpg"
import small_img2 from "../assets/image-product-2-thumbnail.jpg"
import small_img3 from "../assets/image-product-3-thumbnail.jpg"
import small_img4 from "../assets/image-product-4-thumbnail.jpg"

import arrowLeft from "../assets/icon-previous.svg";
import arrowRight from "../assets/icon-next.svg";


import { useState } from "react";
import ModalCarrousel from "./ModalCarrousel";


export default function CarrousselDesktop ({openModalCarrousel,setOpenModalCarrousel,currentSlide,setCurrentSlide}) {

  const images = [img1, img2, img3, img4];

    // affichage img cliquée 
    const [currentImg,setCurrentImg] = useState(img1)

const handleChangeImg =(newImg) => {
    setCurrentImg(newImg)
}

    //gère l'ouverture modal
const handleOpen = () =>{
    setOpenModalCarrousel(!openModalCarrousel)
}

// changement de slide pour le carroussel modal
const showSlide = (slideIndex) => {
  setCurrentSlide((slideIndex + images.length) % images.length);
};

const changeSlide = (n) => {
  showSlide(currentSlide + n);
};
    

return (
    <div className="w-[25em]">
      <div>
      <img
      key={currentSlide}
      src={images[currentSlide]}
        alt="article"
        className="h-[25em]  rounded-xl"
        onClick={handleOpen}
      />
      
      <div
        className="absolute top-1/2 cursor-pointer left-0 rounded-full bg-white p-3 ml-4 "
        onClick={() => changeSlide(-1)}
        >
        <img src={arrowLeft} alt='fleche' />
      </div>
      <div 
      className="absolute top-1/2 cursor-pointer right-0 rounded-full bg-white p-3 mr-4 "
      onClick={() => changeSlide(1)} 
      >
        <img src={arrowRight} alt='fleche' />
      </div>
      </div>
      <div className="flex justify-between mt-6">
        <img
          src={small_img1}
          alt="article"
          onClick={() => handleChangeImg(img1)}
          className={`h-[5em] rounded-xl hover:opacity-50 ${
            currentImg === img1 ? "border-orange-500 border-4 opacity-50" : ""
          }`}
        />
        <img
          src={small_img2}
          alt="article"
          onClick={() => handleChangeImg(img2)}
          className={`h-[5em] rounded-xl hover:opacity-50 ${
            currentImg === img2 ? "border-orange-500 border-4 opacity-50" : ""
          }`}
        />
        <img
          src={small_img3}
          alt="article"
          onClick={() => handleChangeImg(img3)}
          className={`h-[5em] rounded-xl hover:opacity-50 ${
            currentImg === img3 ? "border-orange-500 border-4 opacity-50" : ""
          }`}
        />
        <img
          src={small_img4}
          alt="article"
          onClick={() => handleChangeImg(img4)}
          className={`h-[5em] rounded-xl hover:opacity-50 ${
            currentImg === img4 ? "border-orange-500 border-4 opacity-50" : ""
          }`}
        />
      </div>
      {openModalCarrousel&& (
        <ModalCarrousel
        setOpenModalCarrousel={setOpenModalCarrousel}
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
        />
      )}
    </div>
  );
}
