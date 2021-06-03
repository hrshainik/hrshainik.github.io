import React from "react";
import {
  HomeContainer,
  LogoContainer,
  Logo,
  HeadingContainer,
  Heading,
  SubHeading,
  Hero,
  GetInTouch,
  SpecialText,
  Line,
} from "./home.styles";
import logo from "../../img/logo.png";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animation/index";
import Paragraph from "../../components/Text/Paragraph";
import ProjectThumbnail from "../../components/ProjectThumbnail/ProjectThumbnail";
import Footer from "../../components/Footer/Footer";
import HeadingOne from "../../components/Text/HeadingOne";
import HeadingTwo from "../../components/Text/HeadingTwo";
import HeadingThree from "../../components/Text/HeadingThree";
import ListItem from "../../components/ListItem/ListItem";

const Home = ({ isMobile, projects }) => {
  const listItems = ["UI & UX", "HTML & CSS", "JavaScript", "React"];

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <HomeContainer>
        <Hero isMobile={isMobile}>
          {isMobile ? (
            <LogoContainer to="/">
              <Logo src={logo} alt="logo"></Logo>
            </LogoContainer>
          ) : null}
          <HeadingContainer>
            <Heading>Habibur Rahman</Heading>
            <SubHeading>Designer + Developer</SubHeading>
          </HeadingContainer>
        </Hero>
        <HeadingOne text={"Portfolio"} style={{ marginTop: "2.5rem" }} />
        <Paragraph
          text={
            "I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies I've dedicated my time to."
          }
          style={{ marginBottom: "2rem" }}
        />
        {projects.map((project, i) => (
          <ProjectThumbnail key={i} {...project} />
        ))}
        <Line />
        <HeadingOne text={"About"} style={{ marginTop: "2rem" }} />
        <HeadingThree text={"Hi, I'm Habibur Rahman."} />
        <Paragraph
          text={
            "I design websites. That's the long and short of it. UI and UX, Sketch, Illustrator, Potatoshop and pretty decent HTML and CSS — with Sass and that nice Susy grid stuff."
          }
          style={{ marginBottom: "1.5rem" }}
        />
        <Paragraph
          text={
            "I've been going at it for a while now, so yea, it's coming along... Still putting users first, still making shit POP!"
          }
          style={{ marginBottom: "1.5rem" }}
        />
        <Paragraph
          text={
            "Feel free to drop me a few lines of garbled text in the contact form below to see if it does anything interesting. "
          }
          style={{ marginBottom: "1.5rem" }}
        />
        <HeadingThree text={"Skill"} />
        <ListItem listItems={listItems} style={{ marginBottom: "3rem" }} />
      </HomeContainer>
      <GetInTouch>
        <HeadingTwo
          text={"Interested to work with me?"}
          style={{
            lineHeight: "90%",
            letterSpacing: "0.5px",
          }}
        />
        <SpecialText to="/contact">Get in touch</SpecialText>
      </GetInTouch>
      <Footer
        style={{
          background: "var(--bgTwo)",
          boxShadow:
            "50vw 0 0 var(--bgTwo), -50vw 0 0 var(--bgTwo), 0 0 0 var(--bgTwo)",
        }}
        isMobile={isMobile}
      />
    </motion.div>
  );
};

export default Home;
