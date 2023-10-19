import React from "react";
import style from "./ContactButton.module.css";

const ContactButton = ({ children }) => {
  return (
    <button className={style.btn} type="submit">
      {children}
    </button>
  );
};

export default ContactButton;
