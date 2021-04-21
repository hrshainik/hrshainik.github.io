import React from "react";
import { LoaderContainer, Loading } from "./loader.styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <Loading></Loading>
      <Loading></Loading>
    </LoaderContainer>
  );
};

export default Loader;
