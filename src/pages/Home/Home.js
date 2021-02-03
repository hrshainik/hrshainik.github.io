import React from "react";
import {
  HomeContainer,
  LogoContainer,
  Logo,
  HeadingContainer,
  Heading,
  SubHeading,
} from "./home.styles";
import logo from "../../img/logo.png";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animation/index";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <HomeContainer>
        <LogoContainer to="/">
          <Logo src={logo}></Logo>
        </LogoContainer>
        <HeadingContainer>
          <Heading>Habibur Rahman</Heading>
          <SubHeading>Designer + Developer</SubHeading>
        </HeadingContainer>
      </HomeContainer>
    </motion.div>
  );
};

export default Home;
