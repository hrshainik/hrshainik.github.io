import React from "react";
import {
  TypeStackContainer,
  TypeContainer,
  Title,
  Type,
  StackContainer,
  Stack,
  Item,
} from "./typeStack.styles";

const TypeStack = ({ titleOne, titleTwo, type, stack, style }) => {
  return (
    <TypeStackContainer style={style}>
      <TypeContainer>
        <Title>{titleOne}</Title>
        <Type>{type}</Type>
      </TypeContainer>
      <StackContainer>
        <Title>{titleTwo}</Title>
        <Stack>
          {stack.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Stack>
      </StackContainer>
    </TypeStackContainer>
  );
};

export default TypeStack;
