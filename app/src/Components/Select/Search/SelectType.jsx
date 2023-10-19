import React from "react";
import style from "./SelectType.module.css";

const SelectType = ({ value }) => {
  return (
    <select
      className={style.dropdown}
      name="types"
      id="types"
      value={value.type} // This is the value of the selected option
    >
      <option value="" selected disabled hidden>
        {" "}
        {/* This is the default value */}
        Type
      </option>
      <option value="house">House</option>
      <option value="apartment">Apartment</option>
      <option value="land">Land</option>
      <option value="room">Room</option>
      <option value="garage">Garage</option>
    </select>
  );
};

export default SelectType;
