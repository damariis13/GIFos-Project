import React from "react";
import "./ResultsSection.css";
import  Gif  from "./Gif/Gif";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";


function ResultsSection({dataGif}) {
    const { darkTheme } = useContext(ThemeContext);
    return (
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
        
        
    )
}

export default ResultsSection;