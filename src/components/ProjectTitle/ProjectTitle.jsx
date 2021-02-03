import React from "react";
import { Title, SubTitle } from "./projectTitle.styles";

const ProjectTitle = ({ handleText, handleSubText }) => {
  return (
    <>
      <Title>{handleText}</Title>
      <SubTitle>{handleSubText}</SubTitle>
    </>
  );
};

export default ProjectTitle;
