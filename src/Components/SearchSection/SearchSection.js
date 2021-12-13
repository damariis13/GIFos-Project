import React from "react";
import "./SearchSection.css";
import ilustraHeader from "../../imgs/ilustra_header.svg";
import iconX from "../../imgs/close-svgrepo-com.svg";
import searchIcon from "../../imgs/icon-search-mod-noc.svg";
import searchIconBtn from "../../imgs/icon-search.svg"
import { ThemeContext } from "../Context/ThemeContext";
import {useContext} from "react";


function ResultMessage({ displayDataGif, setResults, results, dataGif }) {
    if (displayDataGif.length > 0) {
      return "Resultados de la búsqueda";
    }
    if (displayDataGif.length > 0 && results > 0) {
      return "Resultados de la búsqueda";
    }
    if (dataGif.length === 0) {
      return "Empieza tu búsqueda";
    }
  };

function SearchSection({
    autocomplete, 
    inputSearch, 
    handleChange, 
    handleClickBtn, 
    handleSubmit, 
    results, 
    handleClick, 
    displayInput, 
    dataGif,
    displayDataGif,
    setResults,
}) { 

    

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
                value= {inputSearch}
                onChange={handleChange}
                autoComplete=""/>
                {inputSearch.length > 0 && (
                    <img
                    className="close-icon"
                    src={iconX}
                    alt="close-icon"
                    onClick={handleClick}
                    />
                )}
                <button onClick={handleClickBtn} type="submit" className={`search-btn ${darkTheme ? "dark" : "light"}`}>
                   <img className="search-icon-btn" src={searchIconBtn} alt="searchIcon"></img>
                </button> 
                </form>

                <ul
                className={`${autocomplete.length > 0 && "autocomplete"}`}
                onClick={handleClickBtn}
                >
                    {autocomplete &&
                        autocomplete.map((gif) => {
                            return (
                                <li key={gif.name} onClick={() => displayInput(gif.name)}>
                                <img className="search-icon" src={searchIcon} alt="search-icon" />
                                {gif.name}
                                </li>
                                );
                        })
                    }
                </ul>
            </div>
            <h2 className={`result-title ${darkTheme ? "dark" : "light"}`}>
            <ResultMessage dataGif={dataGif} displayDataGif={displayDataGif} results={results} setResults={setResults}></ResultMessage>
            </h2>
        </div> 
    )
}

export default SearchSection;