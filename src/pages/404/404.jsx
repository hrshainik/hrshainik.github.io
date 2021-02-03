import React from "react";
import {
  NotFoundContainer,
  BackButton,
  Heading,
  SubHeading,
  NotFound,
} from "./404.styles";

const Error = () => {
  return (
    <NotFoundContainer>
      <NotFound>
        <Heading>404</Heading>
        <SubHeading>Page Not Found</SubHeading>
        <BackButton to="/">Go Back</BackButton>
      </NotFound>
    </NotFoundContainer>
  );
};

export default Error;
