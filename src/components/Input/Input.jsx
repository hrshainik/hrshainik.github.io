import React from "react";
import { InputContainer, InputGroup, Label, InputField } from "./input.styles";

const Input = ({ labelName, type, placeholder, id, inputName }) => {
  return (
    <InputContainer>
      <InputGroup>
        <Label for={id}>{labelName}</Label>
        <InputField
          id={id}
          name={inputName}
          type={type}
          placeholder={placeholder}
          required
        />
      </InputGroup>
    </InputContainer>
  );
};

export default Input;
