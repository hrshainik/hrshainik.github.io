import styled from "styled-components";
import { Link } from "react-router-dom";

export const ThumbnailContainer = styled(Link)`
  cursor: pointer;
`;

export const Thumbnail = styled.div`
  width: 100%;
  position: relative;
  margin-top: 2rem;
`;

export const ThumbImage = styled.img`
  width: 100%;
  display: inline-block;
  z-index: -3;
`;

export const TitleBg = styled.div`
  position: absolute;
  height: 6.5rem;
  padding: 1rem 1.2rem;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 100;
`;
