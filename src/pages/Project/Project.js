import React from "react";
import { motion } from "framer-motion";
import { animationTwo } from "../../animation/index";
import { projects } from "../../Data";

const Project = ({ match }) => {
  const project = projects.find((project) => {
    return match.params.url === project.url;
  });

  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <h2>{project.title}</h2>
      <p>{project.paragraph}</p>
    </motion.div>
  );
};

export default Project;
