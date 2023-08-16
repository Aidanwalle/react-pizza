import React from "react";
import debounce from "lodash.debounce";

import { SearchContext } from "../../App";

import searchLogo from "../../assets/search.png";
import clearSearch from "../../assets/clear.png";

import style from "./Search.module.scss";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [setValue]
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className={style.searchBlock}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Поиск..."
      />
      <img className={style.search} src={searchLogo} alt="search" />
      {value && (
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
