import React from "react";
import { motion } from "framer-motion";
import { animationTwo } from "../../animation/index";
import { projects } from "../../Data";
import { ProjectContainer, ImgContainer, ProjectImg } from "./project.styles";
import BackButton from "../../components/BackButton/BackButton";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import Paragraph from "../../components/Text/Paragraph";
import TypeStack from "../../components/TypeStack/TypeStack";
import Footer from "../../components/Footer/Footer";
import VisitSite from "../../components/VisitSite/VisitSite";

const Project = ({ match }) => {
  const project = projects.find((project) => {
    return match.params.url === project.url;
  });

  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <ProjectContainer>
        <BackButton />
        <ProjectTitle
          title={project.title}
          subTitle={project.subTitle}
          style={{ marginBottom: "2rem" }}
        />
        <Paragraph text={project.paragraph} style={{ marginBottom: "2rem" }} />
        <TypeStack {...project.typeStack} style={{ marginBottom: "2rem" }} />
        <VisitSite style={{ marginBottom: "2rem" }} />
        <ImgContainer>
          <ProjectImg src={project.img} />
        </ImgContainer>
      </ProjectContainer>
      <Footer />
    </motion.div>
  );
};

export default Project;
