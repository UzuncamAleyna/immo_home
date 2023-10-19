import React from "react";
import style from "./PersonalInformation.module.css";
import TitleFavorites from "../../../Components/Title/Favorites/TitleFavorites";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Contexts/AuthContainer";
import useMutation from "../../../Hooks/useMutation";
import UserForm from "./UserForm";

const PersonalInformation = ({ onUpdate }) => {
  const { user } = useAuthContext(); //useAuthContext() is a custom hook that returns the user object from the AuthContext
  const { mutate } = useMutation(); //mutate is a function that allows to make a request to the server
  const navigate = useNavigate(); //navigate is a function that allows to navigate to a different page

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/personalInformation/${user._id}`, {
      //._id is the id of the user
      method: "PATCH", //PATCH is a method that allows to update
      data,
      onSuccess: () => {
        onUpdate();
        navigate("/myprofile");
      },
    });
  };

  return (
    <>
      <Link to="/myprofile" className={style.arrow}>
        &larr;
      </Link>
      <TitleFavorites>Personal Information</TitleFavorites>
      <UserForm onSubmit={handleSubmit} initialData={user} />{" "}
      {/* initialData is the data that is going to be displayed in the form, the user can change the data and then submit it */}
    </>
  );
};

export default PersonalInformation;
