import React from "react";
import style from "./ChangePassword.module.css";
import TitleFavorites from "../../../Components/Title/Favorites/TitleFavorites";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Contexts/AuthContainer";
import PasswordForm from "./PasswordForm";
import useMutation from "../../../Hooks/useMutation";

const ChangePassword = ({ onUpdate }) => {
  const { user } = useAuthContext();
  const { mutate } = useMutation();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/changePassword/${user._id}`, {
      method: "PATCH",
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
      <TitleFavorites>Change Password</TitleFavorites>
      <PasswordForm
        onSubmit={handleSubmit}
        initialData={user}
      ></PasswordForm>{" "}
      {/* passwordForm is the form that is going to be displayed */}
    </>
  );
};

export default ChangePassword;
