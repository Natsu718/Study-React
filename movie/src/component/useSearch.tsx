// useSearch.ts
import { useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const updateSearch = (value) => {
    setSearch(value);
    setError(null);
  };

  return { search, updateSearch, error };
}
