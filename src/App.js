import { useEffect, useState, useContext } from "react";
import { API_KEY, API_URL, RESOURCES } from "./Utils/constants";
import Header from './Components/Header/Header';
import ResultsSection from "./Components/ResultsSection/ResultsSection";
import SearchSection from './Components/SearchSection/SearchSection';
import { ThemeContext } from "./Components/Context/ThemeContext";
import './App.css';

function App() {

  const {darkTheme} = useContext(ThemeContext);
  const [autocomplete, setAutocomplete] = useState([]);
  const [dataGif, setDataGif] = useState([]);
  const [results, setResults] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [searchBtn, setSearchBtn] = useState(false);

  const handleChangeInput = (e) => {
    setInputSearch(e.target.value);
  };

  const handleClickBtn = (searchBtn) => {
    setSearchBtn(!searchBtn)
  };

  const handleClick = () => {
    setInputSearch("");
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    getGifs(inputSearch);
    setInputSearch("");
    setSearchBtn(false);
  }

useEffect(() => {
  // Expresion de una funcion asincrónica asignada a una variable
  const getTrendingGifs = async () => {
    try {
      const response = await fetch(
        `${API_URL}${RESOURCES.TRENDING}?api_key=${API_KEY}&limit=12`
        );
        const data = await response.json();

        // Setteamos el array de trending
        setDataGif(data.data);
    } catch (err) {
      console.error(err);
    }
  };
  getTrendingGifs();
}, [])

const getGifs = () => {
  fetch(`${API_URL}${RESOURCES.SEARCH}?api_key=${API_KEY}&q=${inputSearch}&limit=12`)
  .then(response => response.json())
  .then((data) => {
    setDataGif(data.data);
    setSearchBtn(false);
    // numero de resultados al buscar
    setResults(data.pagination.count);
  })
  .catch(error => console.error(error));
};


 useEffect((inputSearch) => {
   if(searchBtn) {
    getGifs(inputSearch);
   }
 }, [inputSearch, searchBtn]);


 const autocompleteList = (v) => {
   fetch(
     `${API_URL}${RESOURCES.AUTOCOMPLETE}?api_key=${API_KEY}&q=${v}&limit=5`
     )
     .then((res) => {
       return res.json();
     })
     .then((results) => {
       setAutocomplete(results.data);
     })
     .catch((err) => {
      console.error(err) 
     });
  };

  useEffect(() => {
    if(inputSearch.length >= 2) {
      autocompleteList(inputSearch);
    } else {
      setAutocomplete([]);
    }
  }, [inputSearch]);

  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
        <Header />
        <SearchSection 
          handleChange={handleChangeInput}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          inputSearch={inputSearch}
          displayInput={setInputSearch}
          handleClickBtn={handleClickBtn}
          autocomplete={autocomplete}
          dataGif={dataGif}
          displayDataGif={setDataGif}
          setResults={setResults}
        />
        <ResultsSection 
        dataGif={dataGif}
        results={results}
         />
    </div>
  );
}

export default App;
