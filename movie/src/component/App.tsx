import React from "react";
import { useMovies } from "./useMovies";
import { useSearch } from "./useSearch";

const App: React.FC = () => {
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort: false });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearch(e.target.value);
  };



  return (
    <div>
      <h1>Movie Search</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
          onChange={handleChange}
          value={search}
          name='query'
          placeholder='Avengers, Star Wars, The Matrix...'
        />
        <button type='submit'>Search</button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={/* ここにポスター画像のURLを入れる */} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
