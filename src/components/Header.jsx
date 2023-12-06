import iconmenu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg"
import cartLogo from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"

import "../style/_header.scss"




export default function Header() {
    return ( 
        <div className="header">
            <div className="hamburger-and-logo">
                <img src={iconmenu} alt="icon menu" className="menu-hamburger" />
                <img src={logo} alt="Logo" />
            </div>
            <div className="cart-and-avatar">
                <img src={cartLogo} alt="icon panier" />
                <img src={avatar} alt="Avatar client" />
            </div>
        </div>
    )
}