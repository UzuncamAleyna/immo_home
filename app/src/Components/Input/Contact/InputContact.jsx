import React from "react";
import style from "./InputContact.module.css";

const InputContact = ({ type, name, value, onChange, disabled = false }) => {
  return (
    <input
      className={style.input}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default InputContact;
