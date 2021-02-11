import React from "react";
import { Title, SubTitle } from "./projectTitle.styles";

const ProjectTitle = ({ title, subTitle }) => {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </>
  );
};

export default ProjectTitle;
