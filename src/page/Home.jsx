import CarouselSmall from "../components/Carrousel"
import Text from "../components/Text"


import data from "../assets/data"



export default function Home () {
 
    const { brand, title, text } = data[0];


    return (
        <div>
      
            <CarouselSmall 
             />
             
             <Text 
             brand={brand} 
             title={title} 
             text={text} 
             />
             
        </div>
    )
}