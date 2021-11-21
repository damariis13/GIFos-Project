import { useEffect, useState } from "react";
import { API_KEY, API_URL, RESOURCES } from "./Utils/constants";
import Header from './Components/Header/Header';
import ResultsSection from "./Components/ResultsSection/ResultsSection";
import SearchSection from './Components/SearchSection/SearchSection';
import './App.css';

function App() {
const [trending, setTrending] = useState([]);

useEffect(() => {
  // Expresion de una funcion asincrónica asignada a una variable
  const getTrendingGifs = async () => {
    try {
      const response = await fetch(
        `${API_URL}${RESOURCES.TRENDING}?api_key=${API_KEY}&limit=12`
        );
        const data = await response.json();

        // Setteamos el array de trending
        setTrending(data.data);
    } catch (err) {
      console.error(err);
    }
  };
  getTrendingGifs();
}, [])

  return (
    <div className="App">
        <Header />
        <SearchSection />
        <ResultsSection 
        trend={trending}
        displayTrend={setTrending} />
        {trending.map((item) => {
                return (
                    // <div className="gif-container">
                    // <a href={link} target="_blank" rel="noreferrer">
                    //   <img className="gif-img" src={url} title={title} alt={alt} />
                    // </a>
                    // </div>
                    <div key={item.id}>
                    <img src={item.images.fixed_height.url} />
                    </div>
                );
        })} 
    </div>
  );
}

export default App;
