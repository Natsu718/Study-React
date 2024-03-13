// useMovies.ts
import { useState, useCallback, useMemo, useRef } from "react";
import { searchMovies } from "./searchMovies";

interface Movie {
    id: number;
    title: string;
    // 他の映画情報も追加する場合はここに追加
  }
  
  interface MoviesHookProps {
    search: string;
    sort: boolean;
  }
  
  export function useMovies({ search, sort }: MoviesHookProps) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [, setError] = useState<Error | null>(null);
    const previousSearch = useRef<string>(search);
  
    const getMovies = useCallback(async ({ search }: { search: string }) => {
      if (search === previousSearch.current) return;
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        // ダミーデータを使用する場合、ここでAPIからデータを取得する代わりにダミーデータをセットする
        const newMovies = await searchMovies({ search }); // searchMovies関数は実装されていると仮定
        setMovies(newMovies);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }, []);
  
    const sortedMovies = useMemo(() => {
      if (!movies) return [];
      return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies;
    }, [sort, movies]);
  
    return { movies: sortedMovies, getMovies, loading };
  }