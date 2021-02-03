import React from "react";
import { P } from "./paragraph.styles";

const Paragraph = ({ text, style }) => {
  return <P style={style}>{text}</P>;
};

export default Paragraph;
