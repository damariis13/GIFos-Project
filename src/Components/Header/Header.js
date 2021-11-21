import React from "react";
import "./Header.css";
import logo from "../../imgs/logo-desktop.svg";

function Header() {
    return (
        <div> 
        <img src={logo} alt="logo" />
        <button>Modo Dark</button>
        </div> 
    )
}

export default Header;