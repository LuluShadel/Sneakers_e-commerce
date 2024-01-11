import CarrousselDesktop from "./CarrouselDesktop"
import close from "../assets/icon-close-orange.svg"

export default function ModalCarrousel ({setOpenModalCarrousel,currentSlide,setCurrentSlide,arrowLeft,arrowRight}) {
  
    const handleClose = () => {
        setOpenModalCarrousel(false)
    }
    return(
        <div className="fixed left-0 top-0 w-full h-full bg-gray-950 bg-opacity-90 flex items-center justify-center ">
            <div className="flex flex-col  w-[25em] gap-3 ">
                <img 
                src={close} 
                alt="close"
                className="ml-auto"
                onClick={handleClose}
                 />
            <CarrousselDesktop
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
            arrowLeft={arrowLeft}
            arrowRight={arrowRight}
            isInsideModal={true} // permet d'afficher les flèches seulement si le composant est dans la modale 
                        />
            </div>
        </div>
    )
}