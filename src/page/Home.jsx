import Header from "../components/Header";
import CarouselSmall from "../components/Carrousel"
import CarrousselDesktop from "../components/CarrouselDesktop";
import Text from "../components/Text"
import Price from "../components/Price";
import AddItem from "../components/addItem";


import data from "../assets/data"

import { useState } from "react";



export default function Home () {
 
    const { brand, title, text, oldPrice, newPrice, promotion  } = data[0];

    //panier ouverture 
    const [cart,setCart] =useState(false);

    // panier ajout 
    const [addCart, setAddCart] =useState(0)

    // contrôle quantité du client
  const [quantity, setQuantity] = useState(0)

    return (
        <div>
      
            <Header
            cart={cart}
            setCart={setCart}
            addCart={addCart}
            
            />
            <div className="md:flex md:justify-between md:gap-10">
                <div className="md:hidden">
            <CarouselSmall 
            cart={cart}
            setCart={setCart}
            addCart={addCart}
            setAddCart={setAddCart}
            title={title}
            newPrice={newPrice}
             />
             </div>
            <div className="hidden md:block">
             <CarrousselDesktop />
             </div>

             <div className="ml-4 mr-4 md:w-3/4 md:mt-20 ">
             <Text 
             brand={brand} 
             title={title} 
             text={text} 
             newPrice={newPrice}
             cart={cart}
             setAddCart={setAddCart}
             addCart={addCart}
             
            
             />

             <Price
             oldPrice={oldPrice}
             newPrice={newPrice}
             promo={promotion}
             />

             <AddItem
             addCart={addCart}
             setAddCart={setAddCart}
             quantity={quantity}
             setQuantity={setQuantity}
              />


             </div>
             </div>
        </div>
    )
}