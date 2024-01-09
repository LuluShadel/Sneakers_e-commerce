import CarouselSmall from "../components/Carrousel"
import Text from "../components/Text"
import Price from "../components/Price";
import AddCart from "../components/addCart";


import data from "../assets/data"



export default function Home () {
 
    const { brand, title, text, oldPrice, newPrice, promotion  } = data[0];


    return (
        <div>
      
            <CarouselSmall 
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

             <AddCart />


             </div>
        </div>
    )
}