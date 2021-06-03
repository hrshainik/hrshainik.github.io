import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animationOne } from "../../animation/index";
import { ProjectContainer, ImgContainer, ProjectImg } from "./project.styles";
import BackButton from "../../components/BackButton/BackButton";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import Paragraph from "../../components/Text/Paragraph";
import TypeStack from "../../components/TypeStack/TypeStack";
import Footer from "../../components/Footer/Footer";
import VisitSite from "../../components/VisitSite/VisitSite";
import { fromImgToUrl } from "../../utils/urls";

const Project = ({ match, isMobile, projects }) => {
  const project = projects.find((project) => {
    return match.params.url === project.slug;
  });

  console.log(projects);

  console.log(project);

  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne}>
      <ProjectContainer>
        {/* <BackButton url="/portfolio" />
        <ProjectTitle
          title={project.title}
          subTitle={project.subtitle}
          style={{ marginBottom: "2rem" }}
        />
        <Paragraph text={project.paragraph} style={{ marginBottom: "2rem" }} />
        <TypeStack {...project.typeStack} style={{ marginBottom: "2rem" }} />
        <VisitSite style={{ marginBottom: "2rem" }} />
        <ImgContainer>
          <ProjectImg src={fromImgToUrl(project.image)} />
        </ImgContainer> */}
      </ProjectContainer>
      <Footer isMobile={isMobile} />
    </motion.div>
  );
};

export default Project;
