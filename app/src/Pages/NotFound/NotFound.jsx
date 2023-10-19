import React from "react";
import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={style.container}>
      {/* This will pop up if you go to a page that doesn't exist */}
      <h1 className={style.title}>404 not found</h1>
      <p className={style.text}>Page does not exist</p>
    </div>
  );
};

export default NotFound;
