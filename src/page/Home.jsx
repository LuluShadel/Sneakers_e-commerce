import Header from "../components/Header";
import CarouselSmall from "../components/Carrousel"
import Text from "../components/Text"
import Price from "../components/Price";
import AddCart from "../components/addCart";


import data from "../assets/data"

import { useState } from "react";



export default function Home () {
 
    const { brand, title, text, oldPrice, newPrice, promotion  } = data[0];

    //panier ouverture 
    const [cart,setCart] =useState(false);

    // panier ajout 

    const [addCart, setAddCart] =useState(0)

    return (
        <div>
      
            <Header
            cart={cart}
            setCart={setCart}
            
            />
            <CarouselSmall 
            cart={cart}
            setCart={setCart}
            addCart={addCart}
            setAddCart={setAddCart}
            newPrice={newPrice}
            title={title}
            

             />


             <div className="ml-4 mr-4">
             <Text 
             brand={brand} 
             title={title} 
             text={text} 
             />

             <Price
             oldPrice={oldPrice}
             newPrice={newPrice}
             promo={promotion}
             />

             <AddCart
             addCart={addCart}
             setAddCart={setAddCart}
              />


             </div>
        </div>
    )
}