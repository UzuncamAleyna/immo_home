import React from "react";
import style from "./Input.module.css";

const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
}) => {
  return (
    <input
      className={style.input}
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
