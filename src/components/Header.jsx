import iconmenu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg"
import cartLogo from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"
import close from "../assets/icon-close.svg"


import { useState } from "react";
import { Link } from "react-router-dom";





export default function Header() {

    const [menu,setMenu] = useState(false);

    const handleMenu = ()=> {
        setMenu(true);
    }
    const handleMenuClose = () => {
        setMenu(false);
    }



    return ( 
        <div className="flex h-4 m-2 justify-between items-center " >
            <div className="flex gap-4   ">
                <img src={iconmenu} alt="icon menu" onClick={handleMenu} className="cursor-pointer md:hidden" />
                <img src={logo} alt="Logo" />
            </div>
            {menu &&
            <div className=" fixed left-0 top-0 w-full h-full bg-gray-950 bg-opacity-30">
                <div className="bg-white h-full w-1/2 pt-2 pl-2 ">
                
                <img src={close} alt="icon croix" onClick={handleMenuClose} className="cursor-pointer"/>
                <nav className="flex flex-col font-bold mt-10 gap-6">
                 <Link to="#" >Collection</Link>
                 <Link to="#" >Men</Link>
                 <Link to="#" >Women</Link>
                 <Link to="#" >About</Link>
                 <Link to="#" >Contact</Link>
                 </nav>
                 </div>
                 </div>
            }
            <div>
            <nav className="gap-6 hidden text-slate-500 md:flex ">
                 <Link to="#" >Collection</Link>
                 <Link to="#" >Men</Link>
                 <Link to="#" >Women</Link>
                 <Link to="#" >About</Link>
                 <Link to="#" >Contact</Link>
                 </nav>
            </div>
            <div className="flex h-6 gap-3">
                <img src={cartLogo} alt="icon panier" />
                <img src={avatar} alt="Avatar client" className="h-7" />
            </div>
        </div>
    )
}