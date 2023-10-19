import React from "react";
import style from "./Office.module.css";

const Office = ({ office }) => {
  return (
    <div className={style.container}>
      <article className={style.card}>
        <img src={office.image} className={style.image} alt={office.name} />
        <div className={style.textBox}>
          <div className={style.divCenter}>
            <h3 className={style.titleCenter}>{office.name}</h3>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Office;
