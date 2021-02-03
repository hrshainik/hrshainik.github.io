import styled from "styled-components";

export const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TextAreaGroup = styled.div`
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

export const TextAreaField = styled.textarea`
  width: 100%;
  height: 10rem;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0);
  padding: 0.5rem;
  color: #dadada;
  resize: vertical;

  :focus {
    outline: 0;
  }
`;
