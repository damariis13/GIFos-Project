import React from "react";
import "./SearchSection.css";
import ilustraHeader from "../../imgs/ilustra_header.svg";
import searchIcon from "../../imgs/icon-search-mod-noc.svg";
import { ThemeContext } from "../Context/ThemeContext";
import {useContext} from "react";

function SearchSection({inputSearch, handleChange, handleClick, handleSubmit}) {

    const { darkTheme } = useContext(ThemeContext);
    return (
        <div className="search-section">
            <h1  className={`results-title ${darkTheme ? "dark" : "light"}`}>¡Inspírate y busca los mejores <b>GIFS</b>!</h1> 
            <img className="img-search" src={ilustraHeader} alt="ilustraHeader" />
            <div>
                <form className="search-elements" onSubmit={handleSubmit}>
                <input
                className={`search-input ${darkTheme ? "dark" : "light"}`} 
                type="text" 
                placeholder="Buscar Gifs"
                value={inputSearch}
                onChange={handleChange}
                autoComplete=""/>
                <button onClick={handleClick} type="submit" className={`search-btn ${darkTheme ? "dark" : "light"}`}>
                   <img className="search-icon" src={searchIcon} alt="searchIcon"></img>
                </button> 
                </form>
            </div>
            <h2 className={`results-subtitle ${darkTheme ? "dark" : "light"}`} >Resultados de la búsqueda</h2>
        </div> 
    )
}

export default SearchSection;