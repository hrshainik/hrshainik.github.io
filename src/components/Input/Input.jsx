import React from "react";
import { InputContainer, InputGroup, Label, InputField } from "./input.styles";

const Input = ({ labelName, type, placeholder }) => {
  return (
    <InputContainer>
      <InputGroup>
        <Label>{labelName}</Label>
        <InputField type={type} placeholder={placeholder} required />
      </InputGroup>
    </InputContainer>
  );
};

export default Input;
