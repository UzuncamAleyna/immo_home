import React from "react";
import { TbEdit } from "react-icons/tb";
import { BiTrash, BiLogOut } from "react-icons/bi";
import style from "./ProfileButtons.module.css";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../../Consts/Routes";
import { useAuthContext } from "../../../Contexts/AuthContainer";
import useMutation from "../../../Hooks/useMutation";

const ProfileButtons = (onSuccess) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { mutate } = useMutation();
  const { logout } = useAuthContext();

  const handleDelete = () => {
    mutate(`${process.env.REACT_APP_API_URL}/myProfile/${user._id}`, {
      method: "DELETE", // DELETE is a method that allows to delete
      onSuccess: () => {
        onSuccess();
        navigate("/login");
      },
    });
  };

  return (
    <>
      <div className={style.container}>
        <Link to={ROUTES.personalInformation} className={style.btnBox}>
          <i className={style.icon}>
            <TbEdit />
          </i>
          <button className={style.btn}>Personal Information</button>
        </Link>
        <Link to={ROUTES.changePassword} className={style.btnBox}>
          <i className={style.icon}>
            <TbEdit />
          </i>
          <button className={style.btn}>Change Password</button>
        </Link>
        <Link
          to={ROUTES.register}
          className={style.btnBox}
          onClick={handleDelete}
        >
          <i className={style.icon}>
            <BiTrash />
          </i>
          <button className={style.btn}>Delete Account</button>
        </Link>
        {/* Log user out */}
        <div className={style.btnBox} onClick={logout}>
          <i className={style.icon}>
            <BiLogOut />
          </i>
          <button className={style.btn}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default ProfileButtons;
