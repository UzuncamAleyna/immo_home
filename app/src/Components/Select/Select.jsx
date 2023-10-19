import React from "react";
import style from "./Select.module.css";

const Select = ({ onChange, name, value, disabled = false }) => {
  return (
    <select
      className={style.dropdown}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="" selected disabled hidden></option>{" "}
      {/* This is the default value */}
      <option value="user">User</option>
      <option value="realtor">Realtor</option>
    </select>
  );
};

export default Select;
