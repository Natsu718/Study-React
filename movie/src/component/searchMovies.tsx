const API_KEY = "c179b0a5";

interface MovieData {
    id: number;
    title: string;
    // 他の映画情報も追加する場合はここに追加
  }
  
  export async function searchMovies({ search }: { search: string }): Promise<MovieData[]> {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw new Error("Error fetching movies");
    }
  }