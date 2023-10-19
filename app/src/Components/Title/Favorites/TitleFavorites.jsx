import React from "react";
import style from "./TitleFavorites.module.css";

const TitleFavorites = ({ children }) => {
  return (
    <div>
      <h1 className={style.title}>{children}</h1>
    </div>
  );
};

export default TitleFavorites;
