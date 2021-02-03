import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import { ContactContainer } from "./contact.styles";
import HeadingTwo from "../../components/Text/HeadingTwo";
import Paragraph from "../../components/Text/Paragraph";
import LinkP from "../../components/Text/LinkP";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <ContactContainer>
      <BackButton />
      <HeadingTwo text={"Say 👋  Hi! "} />
      <Paragraph
        text={
          "I enjoy discussing new UX projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up. You can also email me at"
        }
      />
      <LinkP text={"hrsshainik@gmail.com"} />
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
