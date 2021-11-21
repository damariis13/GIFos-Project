import React from "react";
import "./ResultsSection.css";


function ResultsSection({trend, displayTrend}) {
    return (
        <div className="gallery-gif"> 
        <h2>Resultados de la busqueda</h2>
        
        {/* {trend.map((item) => {
                return (
                    <div className="gif-container">
                    <a href={link} target="_blank" rel="noreferrer">
                      <img className="gif-img" src={url} title={title} alt={alt} />
                    </a>
                    </div>
                    <div key={item.id}>
                    <img src={item.images.fixed_height.url} />
                    </div>
                )
            })
        } */}
        </div>
        
        
    )
}

export default ResultsSection;