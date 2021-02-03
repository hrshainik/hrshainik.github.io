import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const InputField = styled.input`
  width: 100%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0);
  padding: 0.8rem 0.5rem;
  color: #dadada;
  font-size: 1.4rem;

  :focus {
    outline: 0;
  }
`;
