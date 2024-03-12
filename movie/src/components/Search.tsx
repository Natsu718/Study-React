import React, { useState, ChangeEvent, useEffect } from "react";

interface SearchProps {
  search: (value: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  
  // debounce 関数を定義
  const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  // デバウンスされた検索値を取得
  const debouncedSearchValue = useDebounce(searchValue, 100);

  // デバウンスされた検索値が変更されたときに検索を実行
  useEffect(() => {
    props.search(debouncedSearchValue);
  }, [debouncedSearchValue]);

  const onInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={onInputValueChanged}
        type="text"
      />
    </form>
  );
};

export default Search;
