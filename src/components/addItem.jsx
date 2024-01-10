
import moins from "../assets/icon-minus.svg"
import plus from "../assets/icon-plus.svg"
import cart from "..//assets/icon-cart-white.svg"







export default function AddItem ({setAddCart,quantity,setQuantity}) {

     

  const handleQuantityPlus = () =>{
    setQuantity(quantity+1)
  }

  // permet de ne pas aller en dessous de 0
  const handleQuantityMoins = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };



  // ajout au panier 
    const handleAddCart = () => {
        setAddCart(quantity)
        setQuantity(0)
    }

    return (
        <div className="mt-4 mb-12 md:flex md:gap-4  ">
            <div className="bg-slate-200 flex items-center justify-between pl-[5%] pr-[5%] rounded-md h-12 mb-4 md:w-[40%]">
                <img 
                src={moins} 
                alt="moins" 
                className="cursor-pointer"
                onClick={handleQuantityMoins}
                />
                <p>{quantity}</p>
                <img 
                src={plus} 
                alt="plus"
                className="cursor-pointer"
                onClick={handleQuantityPlus}
                />

            </div>
            <div className="bg-orange-500 flex items-center justify-center h-12 cursor-pointer rounded-md md:w-[60%]"
            onClick={handleAddCart}>
                <img src={cart} alt="panier" className=" mr-4" />
                <p 
                className="text-white font-semibold text-80 "
                
                
                >Add to cart</p>


            </div>
        </div>
    )
}
