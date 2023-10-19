import React, { useState } from "react";
import style from "./PersonalInformation.module.css";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import { useAuthContext } from "../../../Contexts/AuthContainer";

const UserForm = ({ onSubmit, initialData = {} }) => {
  const { user } = useAuthContext();
  const [data, setData] = useState({
    //useState contains the initial state and returns an array with the current state and a function to update it
    name: "",
    surname: "",
    email: "",
    ...initialData,
  });

  const handleChange = (e) => {
    // the data in the form is updated with the new data
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // the data is submitted
    e.preventDefault();

    onSubmit(data);
  };

  return (
    <form className={style.formInputs} onSubmit={handleSubmit}>
      {" "}
      {/* handleSubmit is for the form to submit */}
      <article className={style.inputForm}>
        <label htmlFor="username">Surname:</label>{" "}
        {/* htmlFor links input to label  */}
        <Input
          className={style.input}
          name="surname"
          value={data.surname}
          onChange={handleChange}
        />
      </article>
      <article className={style.inputForm}>
        <label htmlFor="password">Name:</label>
        <Input
          className={style.input}
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </article>
      <article className={style.inputForm}>
        <label htmlFor="password">Email:</label>
        <Input
          className={style.input}
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </article>
      <Button type="submit">Update</Button>
    </form>
  );
};

export default UserForm;
