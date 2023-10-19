import React from "react";
import style from "./InputSearch.module.css";
import { BiSearch } from "react-icons/bi";

const InputSearch = ({ value }) => {
  return (
    <div className={style.formSearch}>
      <i className={style.iconSearch}>
        <BiSearch />
      </i>

      <input
        className={style.inputSearch}
        type="search"
        placeholder="Region"
        value={value.city} // value.city is the value of the city property of the value object
      />
    </div>
  );
};

export default InputSearch;
