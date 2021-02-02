import React from "react";
import {
  HomeContainer,
  LogoContainer,
  Logo,
  HeadingContainer,
  Heading,
  SubHeading,
} from "./home.styles";
import Navbar from "../components/Navbar/Navbar";
import logo from "../img/logo.png";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <LogoContainer>
        <Logo src={logo}></Logo>
      </LogoContainer>
      <HeadingContainer>
        <Heading>Habibur Rahman</Heading>
        <SubHeading>Designer + Developer</SubHeading>
      </HeadingContainer>
    </HomeContainer>
  );
};

export default Home;
