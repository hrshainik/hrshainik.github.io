import React from "react";
import {
  TextAreaContainer,
  TextAreaGroup,
  Label,
  TextAreaField,
} from "./textArea.styles";

const TextArea = ({ labelName, type, placeholder }) => {
  return (
    <TextAreaContainer>
      <TextAreaGroup>
        <Label>{labelName}</Label>
        <TextAreaField type={type} placeholder={placeholder} required />
      </TextAreaGroup>
    </TextAreaContainer>
  );
};

export default TextArea;
