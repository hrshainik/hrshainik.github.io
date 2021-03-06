import React from "react";
import {
  PortfolioContainer,
  UpperSec,
  ProjectWrapper,
} from "./portfolio.styles";
import { motion } from "framer-motion";
import { animationOne } from "../../animation/index";
import BackButton from "../../components/BackButton/BackButton";
import Paragraph from "../../components/Text/Paragraph";
import ProjectThumbnail from "../../components/ProjectThumbnail/ProjectThumbnail";
import Footer from "../../components/Footer/Footer";
import HeadingOne from "../../components/Text/HeadingOne";

const Portfolio = ({ isMobile, projects }) => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne}>
      <PortfolioContainer>
        <UpperSec>
          <BackButton url="/" />
          <HeadingOne
            text="Portfolio"
            style={{
              color: "var(--primary)",
              textTransform: "uppercase",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </UpperSec>
        <Paragraph
          text={
            "I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies I've dedicated my time to."
          }
        />
        <ProjectWrapper>
          {projects.map((project, i) => (
            <ProjectThumbnail key={i} to="/project" {...project} />
          ))}
        </ProjectWrapper>
      </PortfolioContainer>
      <Footer isMobile={isMobile} />
    </motion.div>
  );
};

export default Portfolio;
