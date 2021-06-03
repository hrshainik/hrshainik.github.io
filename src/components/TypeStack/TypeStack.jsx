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

const TypeStack = ({ stack, style }) => {
  return (
    <TypeStackContainer style={style}>
      <TypeContainer>
        <Title>Type</Title>
        <Type>Internship</Type>
      </TypeContainer>
      <StackContainer>
        <Title>Stack</Title>
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
