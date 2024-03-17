import { useState, useEffect, FC } from "react";
import "../App.css";
import Search from "./Search";
import Sort from "./Sort";


interface MovieItem {
  Title: string;
  Poster: string;
  Year: string;
}


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=c179b0a5";

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sort, setSort] = useState<boolean>(false);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue: string) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=c179b0a5`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  const handleSort = () => {
      setSort(!sort);
      
    };
  


  return (
    <div className="App">
      <h1>Movie Search Engine</h1>
      <Search search={ search } />
      <input type='checkbox' onChange={handleSort} checked={sort} />
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <Sort movies={movies} sort={sort} />
        )}
      </div>
    </div>
  );
};


export default App;
