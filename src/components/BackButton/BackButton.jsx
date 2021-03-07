import React from "react";
import { Back } from "./backButton.styles";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <Back />
    </Link>
  );
};

export default BackButton;
