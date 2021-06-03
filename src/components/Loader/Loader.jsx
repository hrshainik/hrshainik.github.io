import React from "react";
import { LoaderWrapper, LoaderContainer, Loading } from "./loader.styles";

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <Loading></Loading>
        <Loading></Loading>
      </LoaderContainer>
    </LoaderWrapper>
  );
};

export default Loader;
