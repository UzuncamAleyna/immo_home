import React from "react";
import style from "./Admin.module.css";
import useFetch from "../../Hooks/useFetch";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import ROUTES from "../../Consts/Routes";

const Admin = () => {
  const { error, data: properties } = useFetch("/admin");

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Manage Properties</h2>
      <div className={style.cards}>
        {properties?.map((property) => (
          <>
            <Link
              to={`${ROUTES.detail.to}${property._id}`}
              className={style.linkStyle}
            >
              <Card key={property._id} property={property} />
            </Link>
          </>
        ))}
      </div>
      <h2 className={style.title}>Manage Offices</h2>

      <h2 className={style.title}>Manage Users</h2>

      <h2 className={style.title}>Manage Categories</h2>
    </div>
  );
};

export default Admin;
