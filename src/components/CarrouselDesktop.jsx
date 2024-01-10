import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";

import small_img1 from "../assets/image-product-1-thumbnail.jpg"
import small_img2 from "../assets/image-product-2-thumbnail.jpg"
import small_img3 from "../assets/image-product-3-thumbnail.jpg"
import small_img4 from "../assets/image-product-4-thumbnail.jpg"


import { useState } from "react";


export default function CarrousselDesktop () {

    const [currentImg,setCurrentImg] = useState(img1)

const handleChangeImg =(newImg) => {
    setCurrentImg(newImg)
}


return (
    <div className="w-[25em]">
      <img
        src={currentImg}
        alt="article"
        className="h-[25em] mt-14 rounded-xl"
      />
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
    </div>
  );
}
