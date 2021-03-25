import React from "react";
import { Back } from "./backButton.styles";
import { Link } from "react-router-dom";

const BackButton = ({ url }) => {
  return (
    <Link to={url}>
      <Back />
    </Link>
  );
};

export default BackButton;
