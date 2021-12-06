import { useEffect, useState, useContext } from "react";
import { API_KEY, API_URL, RESOURCES } from "./Utils/constants";
import Header from './Components/Header/Header';
import ResultsSection from "./Components/ResultsSection/ResultsSection";
import SearchSection from './Components/SearchSection/SearchSection';
import { ThemeContext } from "./Components/Context/ThemeContext";
import './App.css';

function App() {

  const {darkTheme} = useContext(ThemeContext);
  
  const [dataGif, setDataGif] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [searchBtn, setSearchBtn] = useState(false);

  const handleChangeInput = (e) => {
    setInputSearch(e.target.value);
  };

  const handleClick = (searchBtn) => {
    setSearchBtn(!searchBtn);
}

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

const getGifs = (inputSearch) => {
  fetch(`${API_URL}${RESOURCES.SEARCH}?api_key=${API_KEY}&q=${inputSearch}&limit=12`)
  .then(response => response.json())
  .then((data) => {
    setDataGif(data.data);
    setSearchBtn(false);
  })
  .catch(error => console.error(error));
};


useEffect(() => {
  let petition = fetch(
    `${API_URL}${RESOURCES.AUTOCOMPLETE}?api_key=${API_KEY}&q=${setInputSearch}&limit=5`
    );

  petition.then((res) => {
    return res.json();
  })
  .then((res) => { 
    console.log(res);
    res.data.forEach((item) => {
      console.log(item.title);
    }); 
  });
}, [setInputSearch]);

  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
        <Header />
        <SearchSection 
          handleChange={handleChangeInput}
          handleSubmit={handleSubmit}
          inputSearch={inputSearch}
          displayInput={setInputSearch}
          displaySearch={setSearchBtn}
          search={searchBtn}
          handleClick={handleClick}

        />
        <ResultsSection 
        dataGif={dataGif}
        displayDataGif={setDataGif}
         />
    </div>
  );
}

export default App;
