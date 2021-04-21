import React, { useState } from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import SendButton from "../SendButton/SendButton";
import { FormContainer, Form } from "./contactForm.styles";
import { database } from "../../firebase";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    database
      .collection("contact-info")
      .add({
        name: name,
        email: email,
        message: message,
        date: Date(),
      })
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.log(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Input
          labelName={"Your Name"}
          type={"text"}
          placeholder={"Enter your name"}
          id={"name"}
          inputName={"name"}
          value={name}
          valueHandler={(e) => setName(e.target.value)}
        />
        <Input
          labelName={"Your Email"}
          type={"email"}
          placeholder={"Enter your email"}
          id={"email"}
          inputName={"email"}
          value={email}
          valueHandler={(e) => setEmail(e.target.value)}
        />
        <TextArea
          labelName={"About Your Project"}
          type={"text"}
          placeholder={"Enter some text"}
          id={"desc"}
          inputName={"desc"}
          value={message}
          valueHandler={(e) => setMessage(e.target.value)}
        />
        <SendButton value={"Send"} />
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
