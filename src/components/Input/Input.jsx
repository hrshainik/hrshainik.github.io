import React from "react";
import { InputContainer, InputGroup, Label, InputField } from "./input.styles";

const Input = ({
  labelName,
  type,
  placeholder,
  id,
  inputName,
  value,
  valueHandler,
}) => {
  return (
    <InputContainer>
      <InputGroup>
        <Label htmlFor={id}>{labelName}</Label>
        <InputField
          id={id}
          name={inputName}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={valueHandler}
          required
        />
      </InputGroup>
    </InputContainer>
  );
};

export default Input;
