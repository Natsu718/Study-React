import React, { useMemo } from 'react';
import Movie from './Movie';

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
      <div className="movies">
        {sortedMovies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Sort;
