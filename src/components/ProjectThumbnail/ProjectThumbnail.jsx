import React from "react";
import {
  Thumbnail,
  ThumbImage,
  TitleBg,
  ThumbnailContainer,
} from "./projectThumbnail.styles";
import ProjectTitle from "../ProjectTitle/ProjectTitle";

const ProjectThumbnail = ({ title, subTitle, img, url, alt }) => {
  return (
    <ThumbnailContainer to={`/portfolio/${url}`}>
      <Thumbnail>
        <ThumbImage src={img} alt={alt} />
        <TitleBg>
          <ProjectTitle
            title={title}
            subTitle={subTitle}
            style={{ zIndex: "10" }}
          />
        </TitleBg>
      </Thumbnail>
    </ThumbnailContainer>
  );
};

export default ProjectThumbnail;
