import React from "react";
import style from "./HomeButton.module.css";

const HomeButton = ({ children }) => {
  return (
    <button className={style.favBtn} type="submit">
      {children}
    </button>
  );
};

export default HomeButton;
