import React from "react";
import style from "./HeaderVisiter.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../../Consts/Routes";

const Header = () => {
  return (
    <header className={style.header}>
      <section className={style.links}>
        <Link className={style.logoStyle} to={ROUTES.home}>
          IMMO
        </Link>
        <Link className={style.linkStyle} to={ROUTES.forSale}>
          For sale
        </Link>
        <Link className={style.linkStyle} to={ROUTES.forRent}>
          For rent
        </Link>
        <Link className={style.linkStyle} to={ROUTES.immoOffices}>
          Immo Offices
        </Link>
      </section>
      <section className={style.btnLinks}>
        <Link className={style.borderLine} to={ROUTES.myProfile}>
          My Profile
        </Link>
        <Link className={style.borderLine} to={ROUTES.favorites}>
          Favorites
        </Link>
        <Link className={style.login} to={ROUTES.login}>
          Login
        </Link>
      </section>
    </header>
  );
};

export default Header;
