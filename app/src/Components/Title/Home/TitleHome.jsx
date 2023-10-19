import React from "react";
import style from "./TitleHome.module.css";
import SortBy from "../../Select/Home/SortBy";

const Title = ({ children }) => {
  return (
    <div className={style.titleBox}>
      <h1 className={style.homeTitle}>{children}</h1>
      <SortBy /> {/* This is the sort by component */}
    </div>
  );
};

export default Title;
