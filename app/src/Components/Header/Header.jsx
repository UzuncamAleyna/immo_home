import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../Consts/Routes";
import { useAuthContext } from "../../Contexts/AuthContainer";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
  const { logout } = useAuthContext(); // logout is a function that is going to be used to logout the user

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
        <div className={style.btnBox} onClick={logout}>
          <i className={style.icon}>
            <BiLogOut />
          </i>
          <button className={style.btn}>Log Out</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
