import React from "react";
import style from "./SortBy.module.css";

const SortBy = () => {
  return (
    <select className={style.dropdown} name="types" id="types">
      <option value="" selected disabled hidden>
        {" "}
        {/* This is the default value */}
        Sort By
      </option>
      <option value="cheapest">Cheapest</option>
      <option value="priciest">Priciest</option>
      <option value="newest">Newest</option>
    </select>
  );
};

export default SortBy;
