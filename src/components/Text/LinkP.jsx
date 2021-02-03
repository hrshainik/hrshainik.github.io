import React from "react";
import { LinkText } from "./linkP.styles";

const LinkP = ({ text }) => {
  return (
    <LinkText href="mailto:hrsshainik@gmail.com" target="_blank">
      {text}
    </LinkText>
  );
};

export default LinkP;
