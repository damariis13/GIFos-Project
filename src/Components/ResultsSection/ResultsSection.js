import React from "react";
import "./ResultsSection.css";
import  Gif  from "./Gif/Gif";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";


function ResultsSection({dataGif, count}) {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <div>
          <div className={`results-section ${darkTheme ? "dark" : "light"}`}>
        <div>
        <ol className={`gallery-gif ${darkTheme ? "dark" : "light"}`}>
         {dataGif.map((item) => {
                return (
                    <Gif
                        key={item.id}
                        url={item.images.downsized_medium.url}
                        alt={item.title}
                        link={item.url}
                    />
                );
        })}   
        </ol>
        </div>
        
        </div>
        <div>
            {count === 0 && (
                <div className="no-results">
                <p className="no-results-text">
                Lo sentimos, no encontramos lo que buscas.
                </p>
                <p className="no-results-text">¡Inténtalo de nuevo!</p>
                </div>
            )}
        </div>  
        </div>
           
    )
}

export default ResultsSection;