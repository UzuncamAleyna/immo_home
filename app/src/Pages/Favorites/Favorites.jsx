import React from "react";
import style from "./Favorites.module.css";
import TitleFavorites from "../../Components/Title/Favorites/TitleFavorites";
import FavoritesCard from "../../Components/Card/Favorites/FavoritesCard";
import { Link } from "react-router-dom";
import ROUTES from "../../Consts/Routes";

const Favorites = ({ favorites }) => {
  return (
    <>
      <TitleFavorites>Favorites</TitleFavorites>
      <div className={style.cards}>
        {favorites?.map((property) => (
          <>
            <Link
              to={`${ROUTES.detail.to}${property._id}`}
              className={style.linkStyle}
            >
              <FavoritesCard key={property._id} property={property} />
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Favorites;
