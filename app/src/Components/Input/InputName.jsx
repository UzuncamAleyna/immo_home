import React from "react";
import style from "./InputName.module.css";

const InputName = ({ type, name, value, onChange, disabled = false }) => {
  return (
    <input
      className={style.inputName}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default InputName;
