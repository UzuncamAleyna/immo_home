import React from "react";
import style from "./Title.module.css";

const Title = ({ children }) => {
  return (
    <div className={style.immoContainer}>
      <h1 className={style.immoTitle}>{children}</h1>
    </div>
  );
};

export default Title;
