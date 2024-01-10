import trash from "../assets/icon-delete.svg"
import img1small from "../assets/image-product-1-thumbnail.jpg"



export default function Cart ({cart,addCart,title,newPrice,setAddCart}) {

    // vider le panier 

  const handleClearCart = () => {
    setAddCart(0)
  }

 


    return (
      
        <div >
  {cart && (
  <div className='absolute top-0 left-1/2 z-30 bg-white w-[95%] h-3/4  mt-1 -translate-x-1/2 rounded-lg shadow-lg md:h-[300px] md:top-20 max-w-[300px] md:translate-x-0 md:right-[1em] md:left-auto '>
    <div className='border-b-2 border-slate-200 p-[5%]'>
      <p className='font-bold'>Cart</p>
    </div>
    {!addCart ? (
      <div className='h-3/4 flex items-center justify-center'>
        <p className='text-center text-slate-500 font-bold'>Your cart is empty.</p>
      </div>
    ) : (
      <div className='flex flex-col p-6'>
        <div className='flex gap-6 items-center'>
          <img className='h-12 rounded-md' src={img1small} alt='article' />
          <div className='text-slate-500'>
            <p>{title}</p>
            <div>
              <p>
                {newPrice} x {addCart} <span className="font-bold text-black">${newPrice * addCart}</span>
              </p>
            </div>
          </div>
          <img
            src={trash}
            alt='Trash'
            className='cursor-pointer'
            onClick={handleClearCart}
          />
        </div>
        <button className='bg-orange-500 p-4 text-white rounded-md mt-8'>Checkout</button>
      </div>
    )}
  </div>
)}
</div>
            );
          }