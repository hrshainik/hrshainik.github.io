import React from "react";
import { HOne } from "./headingOne.styles";

const HeadingOne = ({ text, style }) => {
  return <HOne style={style}>{text}</HOne>;
};

export default HeadingOne;
