import Cart from "./Cart"


export default function Text({brand,title,text,cart,setAddCart,newPrice,addCart}) {


    return(
        <div>
        <p className="uppercase text-orange-500 font-bold text-xs pb-4 pt-2 mt-4">{brand}</p>
        <h1 className="font-bold text-3xl w-3/4 pb-6">{title}</h1>
        <p className="text-slate-600">{text}</p>
        <div className="hidden md:block">
        <Cart
      cart={cart}
      setAddCart={setAddCart}
      addCart={addCart}
      title={title}
      newPrice={newPrice}

       />
       </div>

        </div>
    )

}