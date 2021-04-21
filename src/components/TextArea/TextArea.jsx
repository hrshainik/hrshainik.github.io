import React from "react";
import {
  TextAreaContainer,
  TextAreaGroup,
  Label,
  TextAreaField,
} from "./textArea.styles";

const TextArea = ({
  labelName,
  type,
  placeholder,
  id,
  inputName,
  value,
  valueHandler,
}) => {
  return (
    <TextAreaContainer>
      <TextAreaGroup>
        <Label htmlFor={id}>{labelName}</Label>
        <TextAreaField
          id={id}
          name={inputName}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={valueHandler}
          required
        />
      </TextAreaGroup>
    </TextAreaContainer>
  );
};

export default TextArea;
