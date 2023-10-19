import React, { useState } from "react";
import InputContact from "../Input/Contact/InputContact";
import ContactButton from "../Button/Contact/ContactButton";
import style from "../../Pages/Detail/Detail.module.css";
import { useAuthContext } from "../../Contexts/AuthContainer";
import useMutation from "../../Hooks/useMutation";
import { useNavigate, useParams } from "react-router-dom";

const ContactForm = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { mutate } = useMutation();
  const navigate = useNavigate();

  const [data, setData] = useState({
    //this is the data that will be sent to the backend
    surname: "",
    name: "",
    email: "",
    phonenumber: "",
    message: "",
    user_id: user._id, //this is the user id of the user that is logged in
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactForm = (e) => {
    e.preventDefault();
    mutate(`${process.env.REACT_APP_API_URL}/detail/${id}/message`, {
      //url to post the data to the backend (messages in mongoDB)
      method: "POST",
      data,
      onSuccess: () => {
        navigate(`/detail/${id}`);
      },
    });
  };
  return (
    <form action="post" onSubmit={handleContactForm}>
      <label htmlFor="surname">Surname:</label>
      <InputContact
        type="text"
        name="surname"
        value={data.surname}
        onChange={handleChange}
      />
      <label htmlFor="name">Name:</label>
      <InputContact
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <label htmlFor="email">E-mail:</label>
      <InputContact
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <label htmlFor="phonenumber">Phone number:</label>
      <InputContact
        type="text"
        name="phonenumber"
        value={data.phonenumber}
        onChange={handleChange}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        className={style.textarea}
        name="message"
        value={data.message}
        onChange={handleChange}
      ></textarea>
      <ContactButton type="submit">Send</ContactButton>
    </form>
  );
};

export default ContactForm;
