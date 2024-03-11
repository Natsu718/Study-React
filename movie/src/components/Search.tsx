import React, { useState, ChangeEvent } from "react";

interface SearchProps {
  search: (query: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    props.search(searchValue);
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
