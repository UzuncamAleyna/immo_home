import React from "react";
import style from "./Search.module.css";
import InputSearch from "../Input/Search/InputSearch";
import SelectType from "../Select/Search/SelectType";
import InputPrice from "../Input/Search/InputPrice";
import ButtonSearch from "../Button/Search/ButtonSearch";

const Search = ({ value, onChange }) => {
  return (
    <form className={style.searchBar} onChange={onChange}>
      <InputSearch name="city" value={value} />
      <SelectType name="type" value={value} />
      <InputPrice name="price" value={value} />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </form>
  );
};

export default Search;
