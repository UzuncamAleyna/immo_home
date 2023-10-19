import React, { useState } from "react";
import style from "./Detail.module.css";
import { FaBed, FaToilet, FaBath } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdOutlineShareLocation } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContactButton from "../../Components/Button/Contact/ContactButton";
import useFetch from "../../Hooks/useFetch";
import useMutation from "../../Hooks/useMutation";
import { useAuthContext } from "../../Contexts/AuthContainer";
import ContactForm from "../../Components/Detail/ContactForm";

const Detail = () => {
  const { id } = useParams(); //this is the id of the property
  const { mutate } = useMutation();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [data, setData] = useState({
    //this is the data that will be sent to the backend
    propertyId: id,
    userId: user._id, //this is the user id of the user that is logged in
  });

  const { isLoading, error, data: property } = useFetch(`/detail/${id}`);

  const handleFavorites = (e) => {
    e.preventDefault();
    mutate(`${process.env.REACT_APP_API_URL}/detail/${id}/favorite`, {
      //url to post the data to the backend (favorites in mongoDB)
      method: "POST", //method to post the data
      data,
      onSuccess: () => {
        navigate(`/favorites`); //rederict to the favorites page
      },
    });
  };

  try {
    if (property === null) {
      //if the property is not found
      return <p>Property not found</p>;
    }
  } catch (error) {
    console.log(error);
  }

  if (error) {
    return <p>{error}</p>;
  }
  //console.log(property);

  if (isLoading) {
    return <p>Loading...</p>;
  } else
    return (
      <>
        <Link to="/" className={style.arrow}>
          {" "}
          {/* arrow to go back to the home page */}
          &larr;
        </Link>
        <div className={style.containerBox}>
          <div className={style.divAbove}>
            <div className={style.images}>
              <div className={style.divBig}>
                <img src={property.cover} className={style.imageBig} alt="" />
              </div>
              <div className={style.divSmall}>
                <img src={property.images[0]} className={style.image} alt="" />{" "}
                {/* index 0,1,2 are the images of the property */}
                <img src={property.images[1]} className={style.image} alt="" />
                <img src={property.images[2]} className={style.image} alt="" />
              </div>
            </div>
            <div className={style.infoBox}>
              <div className={style.container}>
                <article className={style.card}>
                  <div className={style.textBox}>
                    <div className={style.divTitle}>
                      <h3 className={style.titleHead}>{property.state}</h3>
                      <h3 className={style.titleHead}>€ {property.price}</h3>
                    </div>
                    <div className={style.divCenter}>
                      <p className={style.titleCenter}>{property.street}</p>
                      <p className={style.titleCenter}>
                        {property.zip} | {property.city}
                      </p>
                      <p className={style.titleCenterBold}>
                        {property.office_id}
                      </p>
                    </div>
                    <div className={style.divIcons}>
                      <h3 className={style.titleCenterBig}>
                        Practical Information
                      </h3>
                      <p className={style.titleCenter}>
                        <FaBed /> {property.bedrooms} bedrooms
                      </p>
                      <p className={style.titleCenter}>
                        <HiHome /> {property.livingSpace} m² living space
                      </p>
                    </div>
                  </div>
                  <form action="" onSubmit={handleFavorites}>
                    <ContactButton type="submit" disabled={isLoading}>
                      Add to favorites
                    </ContactButton>
                  </form>
                </article>
              </div>
            </div>
          </div>
          <div className={style.divUnder}>
            <div className={style.description}>
              <h3 className={style.titleCenterBig}>Description</h3>
              <p>{property.description}</p>
              <h3 className={style.titleCenterBig}>Overview</h3>
              <div className={style.icons}>
                <p className={style.titleCenter}>
                  <HiHome /> {property.livingSpace} m² living space
                </p>
                <p className={style.titleCenter}>
                  <MdOutlineShareLocation /> {property.landArea} m² land area
                </p>
                <p className={style.titleCenter}>
                  <FaBed /> {property.bedrooms} bedrooms
                </p>
                <p className={style.titleCenter}>
                  <FaBath /> {property.bathrooms} bathrooms
                </p>
                <p className={style.titleCenter}>
                  <FaToilet /> {property.toilets} toilets
                </p>
              </div>
            </div>
            <div className={style.contact}>
              <h3 className={style.titleCenterBig}>Contact Us</h3>
              <ContactForm /> {/* contact form to send a message */}
            </div>
          </div>
        </div>
      </>
    );
};

export default Detail;
