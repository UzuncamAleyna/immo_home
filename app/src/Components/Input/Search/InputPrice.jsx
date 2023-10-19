import React from "react";
import style from "./InputPrice.module.css";
import { BiEuro } from "react-icons/bi";

const InputPrice = ({ value }) => {
  return (
    <div className={style.formSearch}>
      <i className={style.iconSearch}>
        <BiEuro />
      </i>
      <input
        className={style.inputSearch}
        type="search"
        placeholder="Price"
        value={value.price} // value.price is the value of the price property of the value object
      />
    </div>
  );
};

export default InputPrice;
