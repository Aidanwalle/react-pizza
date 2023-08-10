import React from "react";

import { SearchContext } from "../../App";

import searchLogo from "../../assets/search.png";
import clearSearch from "../../assets/clear.png";

import style from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={style.searchBlock}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Поиск..."
      />
      <img className={style.search} src={searchLogo} alt="search" />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={style.clear}
          src={clearSearch}
          alt="clear"
        />
      )}
    </div>
  );
};

export default Search;
