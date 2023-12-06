import iconmenu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg"
import cartLogo from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"
import close from "../assets/icon-close.svg"

import "../style/_header.scss"
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
        <div className="header">
            <div className="hamburger-and-logo">  
                <img src={iconmenu} alt="icon menu" className="menu-hamburger" onClick={handleMenu} />
                <img src={logo} alt="Logo" />
            </div>
            {menu &&
            <div className="menu-open">
                <div className="menu-open-main">
                
                <img src={close} alt="icon croix" className="close" onClick={handleMenuClose}/>
                <nav>
                 <Link to="#" >Collection</Link>
                 <Link to="#" >Men</Link>
                 <Link to="#" >Women</Link>
                 <Link to="#" >About</Link>
                 <Link to="#" >Contact</Link>
                 </nav>
                 </div>
                 </div>
            
            
            
            }
            <div className="cart-and-avatar">
                <img src={cartLogo} alt="icon panier" className="cart" />
                <img src={avatar} alt="Avatar client" />
            </div>
        </div>
    )
}