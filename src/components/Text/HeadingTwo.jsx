import React from "react";
import { HTwo } from "./headingTwo.styles";

const HeadingTwo = ({ text, style }) => {
  return <HTwo style={style}>{text}</HTwo>;
};

export default HeadingTwo;
