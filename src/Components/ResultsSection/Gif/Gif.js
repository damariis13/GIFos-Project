import React from 'react';
import "./Gif.css";


function Gif({ url, title, alt, link }) {
    return (
      <div className="gif-container">
        <a href={link} target="_blank" rel="noreferrer">
          <img className="gif-img" src={url} title={title} alt={alt} />
        </a>
      </div>
    );
  }

  export default Gif;