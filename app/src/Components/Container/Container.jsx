import React from "react";
import style from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={style.container}>{children}</div> // children is a prop to access and utilize the content between the opening and closing tags of the component
  );
};

export default Container;
