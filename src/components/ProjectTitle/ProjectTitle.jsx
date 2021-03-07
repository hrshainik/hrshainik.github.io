import React from "react";
import { Title, SubTitle } from "./projectTitle.styles";

const ProjectTitle = ({ title, subTitle, style }) => {
  return (
    <div style={style}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </div>
  );
};

export default ProjectTitle;
