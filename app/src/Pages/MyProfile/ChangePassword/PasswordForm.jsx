import React, { useState } from "react";
import style from "./ChangePassword.module.css";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";


const PasswordForm = ({ onSubmit, initialData = {} }) => {

  const [data, setData] = useState({
    password: "",
    ...initialData,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(data);
  };
  return (
    <form className={style.formInputs} onSubmit={handleSubmit}>
      <article className={style.inputForm}>
        <label htmlFor="password">New password:</label>
        <Input
          className={style.input}
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </article>
      <Button type="submit">Change Password</Button>
    </form>
  );
};

export default PasswordForm;
