import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";

import small_img1 from "../assets/image-product-1-thumbnail.jpg"
import small_img2 from "../assets/image-product-2-thumbnail.jpg"
import small_img3 from "../assets/image-product-3-thumbnail.jpg"
import small_img4 from "../assets/image-product-4-thumbnail.jpg"






import ModalCarrousel from "./ModalCarrousel";


export default function CarrousselDesktop ({openModalCarrousel,setOpenModalCarrousel,currentSlide,setCurrentSlide,arrowLeft,arrowRight,isInsideModal}) {

  const images = [img1, img2, img3, img4];

    // affichage img cliquée 
    

const handleChangeImg =(newIndex) => {
    setCurrentSlide(newIndex)
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
      <div className="relative">
      <img
      key={currentSlide}
      src={images[currentSlide]}
        alt="article"
        className="h-[25em]  rounded-xl  "
        onClick={handleOpen}
      />
      {isInsideModal && (
      <div
        className="absolute top-1/2 cursor-pointer left-[-2em] rounded-full bg-white p-3 ml-4 "
        onClick={() => changeSlide(-1)}
        >
        <img src={arrowLeft} alt='fleche' />
      </div>
      )}
      {isInsideModal && (
      <div 
      className="absolute top-1/2 cursor-pointer right-[-2em] rounded-full bg-white p-3 mr-4 "
      onClick={() => changeSlide(1)} 
      >
        <img src={arrowRight} alt='fleche' />
      </div>
      )}
      </div>
      
      <div className="flex justify-between mt-6">
        <img
          src={small_img1}
          alt="article"
          onClick={() => handleChangeImg(0)}
          className={`h-[5em] rounded-xl hover:opacity-70 ${
            currentSlide === 0 ? "border-orange-500 border-4 opacity-70" : ""
          }`}
        />
        <img
          src={small_img2}
          alt="article"
          onClick={() => handleChangeImg(1)}
          className={`h-[5em] rounded-xl hover:opacity-70 ${
            currentSlide === 1 ? "border-orange-500 border-4 opacity-70" : ""
          }`}
        />
        <img
          src={small_img3}
          alt="article"
          onClick={() => handleChangeImg(2)}
          className={`h-[5em] rounded-xl hover:opacity-70 ${
            currentSlide === 2 ? "border-orange-500 border-4 opacity-70" : ""
          }`}
        />
        <img
          src={small_img4}
          alt="article"
          onClick={() => handleChangeImg(3)}
          className={`h-[5em] rounded-xl hover:opacity-70 ${
            currentSlide === 3 ? "border-orange-500 border-4 opacity-70" : ""
          }`}
        />
      </div>
      {openModalCarrousel&& (
        <ModalCarrousel
        setOpenModalCarrousel={setOpenModalCarrousel}
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
        arrowLeft={arrowLeft}
        arrowRight={arrowRight}
        />
      )}
    </div>
  );
}
