import React from "react";
import {
  Thumbnail,
  ThumbImage,
  TitleBg,
  ThumbnailContainer,
} from "./projectThumbnail.styles";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import { fromImgToUrl } from "../../utils/urls";

const ProjectThumbnail = ({ title, subtitle, image, slug, alt }) => {
  return (
    <ThumbnailContainer to={`/portfolio/${slug}`}>
      <Thumbnail>
        <ThumbImage src={fromImgToUrl(image)} alt={alt} />
        <TitleBg>
          <ProjectTitle
            title={title}
            subTitle={subtitle}
            style={{ zIndex: "10" }}
          />
        </TitleBg>
      </Thumbnail>
    </ThumbnailContainer>
  );
};

export default ProjectThumbnail;
