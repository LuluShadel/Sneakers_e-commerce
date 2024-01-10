import iconmenu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg"
import cartLogo from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"
import close from "../assets/icon-close.svg"




import { useState } from "react";
import { Link } from "react-router-dom";






export default function Header({cart,setCart,addCart}) {


    // modal contenant la nav sur mobile 
    const [menu,setMenu] = useState(false); 

    const handleMenu = ()=> {
        setMenu(true);
    }
    const handleMenuClose = () => {
        setMenu(false);
    }
    //

    // panier 
    const handleCart = () =>{
        setCart(!cart)
    }
   

return (

    <div className="flex m-2 justify-between items-center md:border-b-2 md:mt-6 md:pb-10">
    <div className="flex gap-4 items-center">
        <img src={iconmenu} alt="icon menu" onClick={handleMenu} className="cursor-pointer md:hidden" />
        <img src={logo} alt="Logo" />
        <div>
            <nav className="ml-4 gap-6 hidden text-slate-500 md:flex items-center">
                <Link to="#" className="hover:border-b-4 border-orange-400 ">Collection</Link>
                <Link to="#" className="hover:border-b-4 border-orange-400 ">Men</Link>
                <Link to="#" className="hover:border-b-4 border-orange-400 ">Women</Link>
                <Link to="#" className="hover:border-b-4 border-orange-400 ">About</Link>
                <Link to="#" className="hover:border-b-4 border-orange-400 ">Contact</Link>
            </nav>
        </div>
    </div>
    {menu && (
        <div className="fixed left-0 top-0 w-full h-full bg-gray-950 bg-opacity-30 z-10">
            <div className="bg-white h-full w-3/4 pt-2 pl-6">
                <img src={close} alt="icon croix" onClick={handleMenuClose} className="cursor-pointer" />
                <nav className="flex flex-col font-bold mt-10 gap-6">
                    <Link to="#">Collection</Link>
                    <Link to="#">Men</Link>
                    <Link to="#">Women</Link>
                    <Link to="#">About</Link>
                    <Link to="#">Contact</Link>
                </nav>
            </div>
        </div>
    )}
    <div className="flex gap-3 items-center">
        <div className="relative">
        <img 
        src={cartLogo} 
        alt="icon panier" 
        className="cursor-pointer"
        onClick={handleCart}
        />
        {addCart !== 0 && (
  <p className="text-white bg-orange-400 text-center rounded-full text-xs absolute top-0 left-3 pr-1 pl-1">
    {addCart}
  </p>
        )}
        </div>
        <img src={avatar} alt="Avatar client" className="h-7 md:h-12 cursor-pointer" />
        
    </div>
</div>

)
    }