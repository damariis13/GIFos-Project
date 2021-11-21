import React from "react";
import "./SearchSection.css";
import ilustraHeader from "../../imgs/ilustra_header.svg";

function SearchSection() {
    return (
        <div className="search-section"> 
        <img src={ilustraHeader} alt="logo" />
        <div className="elements">
            <input type="text" 
                   placeholder="Buscar gifs"
                   autoComplete=""
                   />
            <button> Buscar </button> 
        </div>
        
        </div> 
    )
}

export default SearchSection;