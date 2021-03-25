import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import { ContactContainer } from "./contact.styles";
import HeadingTwo from "../../components/Text/HeadingTwo";
import Paragraph from "../../components/Text/Paragraph";
import LinkP from "../../components/Text/LinkP";
import ContactForm from "../../components/ContactForm/ContactForm";
import { motion } from "framer-motion";
import { animationTwo } from "../../animation/index";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <ContactContainer>
        <BackButton url="/" />
        <HeadingTwo text={"Say 👋  Hi! "} />
        <Paragraph
          text={
            "I enjoy discussing new UX projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up. You can also email me at"
          }
        />
        <LinkP text={"hrsshainik@gmail.com"} />
        <ContactForm />
      </ContactContainer>
      <Footer />
    </motion.div>
  );
};

export default Contact;
