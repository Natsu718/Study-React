import React, { useState, ChangeEvent, useEffect } from "react";
import { useDebounce } from "./Debounce";

interface SearchProps {
  search: (value: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedValue = useDebounce(searchValue, 500);

  // デバウンスされた検索値を取得
  const debouncedSearchValue = useDebounce(debouncedValue, 100);

  // デバウンスされた検索値が変更されたときに検索を実行
  useEffect(() => {
    props.search(debouncedSearchValue);
  }, [debouncedSearchValue]);

  const onInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <form className='search'>
      <input
        style={{
          border: '1px solid transparent',
        }} 
        onChange={onInputValueChanged} 
        value={searchValue} 
        name='query' 
        placeholder='Avengers, Star Wars, The Matrix...'
        type="text"
      />
    </form>
  </>
  );
};

export default Search;