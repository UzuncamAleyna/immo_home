import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import Title from "../../Components/Title/Title";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import style from "./Login.module.css";
import useMutation from "../../Hooks/useMutation";
import { Link } from "react-router-dom";
import ROUTES from "../../Consts/Routes";

const Login = ({ onLogin }) => {
  const { isLoading, error, mutate } = useMutation();

  const [data, setData] = useState({
    // email and password are the names of the inputs
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    //handleChange is for the inputs to change
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    //handleSubmit is for the form to submit
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      //mutate is for the data to be sent to the backend
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
      },
    });
  };
  console.log(onLogin);

  return (
    <Container>
      <Title>Welcome to Immo</Title>
      <form className={style.formInputs} onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <article className={style.inputForm}>
          <label htmlFor="username">Email:</label>{" "}
          {/* htmlFor links input to label  */}
          {/* always make sure that the htmlFor and the name are the same */}
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
          Login
        </Button>
      </form>
      <Link to={ROUTES.register} className={style.p}>
        Don't have an account? Sign up here!
      </Link>
    </Container>
  );
};

export default Login;
