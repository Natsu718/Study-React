import React, { useMemo } from 'react';

interface SortProps {
  movies: MovieItem[];
  sort: boolean;
}

interface MovieItem {
  Title: string;
  Poster: string;
  Year: string;
}

const Sort: React.FC<SortProps> = ({ movies, sort }) => {
  const sortedMovies = useMemo(() => {
    if (!movies) return [];
    return sort
      ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
      : movies;
  }, [sort, movies]);

  return (
    <div className="sorted-movies">
      {sortedMovies.map((movie, index) => (
        <div key={index}>
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default Sort;
