import React from "react";
import {
  TextAreaContainer,
  TextAreaGroup,
  Label,
  TextAreaField,
} from "./textArea.styles";

const TextArea = ({ labelName, type, placeholder, id, inputName }) => {
  return (
    <TextAreaContainer>
      <TextAreaGroup>
        <Label>{labelName}</Label>
        <TextAreaField
          id={id}
          name={inputName}
          type={type}
          placeholder={placeholder}
          required
        />
      </TextAreaGroup>
    </TextAreaContainer>
  );
};

export default TextArea;
