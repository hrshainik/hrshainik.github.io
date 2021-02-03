import React from "react";
import { PortfolioContainer, UpperSec } from "./portfolio.styles";
import { motion } from "framer-motion";
import { animationTwo } from "../../animation/index";
import BackButton from "../../components/BackButton/BackButton";
import HeadingTwo from "../../components/Text/HeadingTwo";
import Paragraph from "../../components/Text/Paragraph";
import ProjectThumbnail from "../../components/ProjectThumbnail/ProjectThumbnail";
import projectImgOne from "../../img/projectOne.jpg";
import projectImgTwo from "../../img/projectTwo.jpg";
import projectImgThree from "../../img/projectThree.jpg";
import projectImgFour from "../../img/projectFour.jpg";
import projectImgFive from "../../img/projectFive.jpg";
import Footer from "../../components/Footer/Footer";
import { MdTranslate } from "react-icons/md";

const Portfolio = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <PortfolioContainer>
        <UpperSec>
          <BackButton />
          <HeadingTwo
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
      </PortfolioContainer>
      <Footer />
    </motion.div>
  );
};

export default Portfolio;
