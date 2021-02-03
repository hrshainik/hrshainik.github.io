import React from "react";
import {
  Thumbnail,
  ThumbImage,
  TitleBg,
  ThumbnailContainer,
} from "./projectThumbnail.styles";
import ProjectTitle from "../ProjectTitle/ProjectTitle";

const ProjectThumbnail = ({ thumbImg, text, subText }) => {
  return (
    <ThumbnailContainer>
      <Thumbnail>
        <ThumbImage src={thumbImg} />
        <TitleBg>
          <ProjectTitle
            handleText={text}
            handleSubText={subText}
            style={{ zIndex: "10" }}
          />
        </TitleBg>
      </Thumbnail>
    </ThumbnailContainer>
  );
};

export default ProjectThumbnail;
