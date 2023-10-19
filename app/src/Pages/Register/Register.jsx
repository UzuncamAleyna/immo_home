import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import style from "./Register.module.css";
import Select from "../../Components/Select/Select";
import InputName from "../../Components/Input/InputName";
import useMutation from "../../Hooks/useMutation";
import Title from "../../Components/Title/Title";

const Register = ({ onLogin }) => {
  const { isLoading, error, mutate } = useMutation();

  const [data, setData] = useState({
    surname: "",
    name: "",
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    mutate(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
      },
    });
  };

  return (
    <Container className={style.registerContainer}>
      <Title>Sign up to Immo</Title>
      <form className={style.formInputs} onSubmit={handleRegister}>
        {" "}
        {/* handleRegister is for the form to submit */}
        {error && <p>{error}</p>}
        <div className={style.inputFormName}>
          <article>
            <label htmlFor="surname">Surname:</label>{" "}
            {/* htmlFor links input to label  */}
            <InputName
              className={style.inputName}
              name="surname"
              value={data.surname}
              onChange={handleChange} //handleChange is for the inputs to change
            />
          </article>
          <article>
            <label htmlFor="name">Name:</label>
            <InputName
              className={style.inputName}
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </article>
        </div>
        <article className={style.inputForm}>
          <label htmlFor="role">Role:</label>
          <Select name="role" value={data.role} onChange={handleChange} />
        </article>
        <article className={style.inputForm}>
          <label htmlFor="email">E-mail:</label>
          <Input
            className={style.input}
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </article>
        <article className={style.inputForm}>
          <label htmlFor="password">Password:</label>
          <Input
            className={style.input}
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </article>
        <Button type="submit" disabled={isLoading}>
          {" "}
          {/* disabled is for the button to be disabled while loading */}
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Register;
