import React, { useContext } from "react";
import "./Header.css";
import LogoLight from "../../imgs/logo-desktop.svg";
import LogoDark from "../../imgs/logo-mobile-modo-noct.svg"
import { ThemeContext } from "../Context/ThemeContext";

function Header() {

    const {darkTheme, setDarkTheme} = useContext(ThemeContext);
    
    return (
        <div className="header"> 
        <img 
        className="logo-header"
        src={`${darkTheme ? LogoDark : LogoLight}`} 
        alt="logo" />
        <button 
        className={`btn-header ${darkTheme ? "dark" : "light"}`}
        onClick={() => setDarkTheme(!darkTheme)}>{`MODO ${darkTheme ? "LIGHT" : "DARK"}`}</button>
        </div> 
    )
}

export default Header;