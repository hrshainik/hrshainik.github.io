import React from "react";
import {
  HomeContainer,
  LogoContainer,
  Logo,
  HeadingContainer,
  Heading,
  SubHeading,
  Hero,
} from "./home.styles";
import logo from "../../img/logo.png";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animation/index";
import Paragraph from "../../components/Text/Paragraph";
import ProjectThumbnail from "../../components/ProjectThumbnail/ProjectThumbnail";
import projectImgOne from "../../img/projectOne.jpg";
import projectImgTwo from "../../img/projectTwo.jpg";
import projectImgThree from "../../img/projectThree.jpg";
import projectImgFour from "../../img/projectFour.jpg";
import projectImgFive from "../../img/projectFive.jpg";
import Footer from "../../components/Footer/Footer";
import HeadingOne from "../../components/Text/HeadingOne";

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
        <Hero>
          <LogoContainer to="/">
            <Logo src={logo}></Logo>
          </LogoContainer>
          <HeadingContainer>
            <Heading>Habibur Rahman</Heading>
            <SubHeading>Designer + Developer</SubHeading>
          </HeadingContainer>
        </Hero>
        <HeadingOne text={"Portfolio"} />
        <Paragraph
          text={
            "I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies I've dedicated my time to."
          }
          style={{ marginBottom: "2rem" }}
        />
        <ProjectThumbnail
          to="/project/:id"
          thumbImg={projectImgOne}
          text={"Project One"}
          subText={"Title goes here..."}
        />
        <ProjectThumbnail
          to="/project/:id"
          thumbImg={projectImgTwo}
          text={"Project Two"}
          subText={"Title goes here..."}
        />
        <ProjectThumbnail
          to="/project/:id"
          thumbImg={projectImgThree}
          text={"Project Three"}
          subText={"Title goes here..."}
        />
        <ProjectThumbnail
          to="/project/:id"
          thumbImg={projectImgFour}
          text={"Project Four"}
          subText={"Title goes here..."}
        />
        <ProjectThumbnail
          to="/project/:id"
          thumbImg={projectImgFive}
          text={"Project Five"}
          subText={"Title goes here..."}
        />
      </HomeContainer>
      <Footer />
    </motion.div>
  );
};

export default Home;
