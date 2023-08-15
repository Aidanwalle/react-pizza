import React from "react";

import { SearchContext } from "../../App";

import searchLogo from "../../assets/search.png";
import clearSearch from "../../assets/clear.png";

import style from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  return (
    <div className={style.searchBlock}>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Поиск..."
      />
      <img className={style.search} src={searchLogo} alt="search" />
      {searchValue && (
        <img
          onClick={onClickClear}
          className={style.clear}
          src={clearSearch}
          alt="clear"
        />
      )}
    </div>
  );
};

export default Search;
