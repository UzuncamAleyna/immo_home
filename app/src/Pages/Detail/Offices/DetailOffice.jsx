import React from "react";
import Container from "../../../Components/Container/Container";
import style from "./DetailOffice.module.css";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";

const DetailOffice = () => {
  const { id } = useParams();
  const { isLoading, error, data: office } = useFetch(`/immoOffices/${id}`);

  try {
    if (office === null) {
      //if the office is not found
      return <p>Office not found</p>;
    }
  } catch (error) {
    console.log(error);
  }

  if (error) {
    return <p>{error}</p>;
  }
  //console.log(office);

  if (isLoading) {
    return <p>Loading...</p>;
  } else
    return (
      <>
        <Link to="/offices" className={style.arrow}>
          &larr;
        </Link>
        <Container key={office._id}>
          <img src={office.image} className={style.image} alt={office.image} />
          <div className={style.divCenter}>
            <h3 className={style.titleCenter}>{office.name}</h3>
            <h3 className={style.titleCenter}>{office.email}</h3>
            <h3 className={style.titleCenter}>{office.telephone}</h3>
          </div>
        </Container>
      </>
    );
};

export default DetailOffice;
