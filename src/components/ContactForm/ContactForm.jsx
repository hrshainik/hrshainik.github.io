import React from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import SendButton from "../SendButton/SendButton";
import { FormContainer, Form } from "./contactForm.styles";

const ContactForm = () => {
  return (
    <FormContainer>
      <Form>
        <Input
          labelName={"Your Name"}
          type={"text"}
          placeholder={"Enter your name"}
          id={"name"}
          inputName={"name"}
        />
        <Input
          labelName={"Your Email"}
          type={"email"}
          placeholder={"Enter your email"}
          id={"email"}
          inputName={"email"}
        />
        <TextArea
          labelName={"About Your Project"}
          type={"text"}
          placeholder={"Enter some text"}
          id={"desc"}
          inputName={"desc"}
        />
        <SendButton value={"Send"} />
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
