import React from "react";
import style from "./Card.module.css";
import { FaBed } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

import { Link } from "react-router-dom";
import ROUTES from "../../Consts/Routes";

const Card = ({ property }) => {
  return (
    <Link to={`${ROUTES.detail.to}${property._id}`} className={style.container}>
      <article className={style.card}>
        <img src={property.cover} className={style.image} alt="" />
        <div className={style.textBox}>
          <div className={style.divTitle}>
            <h3 className={style.titleHead}>{property.state}</h3>
            <h3 className={style.titleHead}>€ {property.price}</h3>
          </div>
          <div className={style.divCenter}>
            <h3 className={style.titleCenter}>
              {property.type} | {property.city}
            </h3>
          </div>
          <div className={style.divIcons}>
            <p>
              <FaBed /> {property.bedrooms}
            </p>
            <p>
              <HiHome /> {property.livingSpace} m²
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
