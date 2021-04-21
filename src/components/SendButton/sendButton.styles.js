import styled from "styled-components";

export const Button = styled.input`
  width: 100%;
  background-color: var(--white);
  text-transform: uppercase;
  color: var(--bgOne);
  padding: 0.8rem 0;
  font-size: 2rem;
  font-weight: 500;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  transition: background-color 300ms ease, color 300ms ease,
    transform 300ms ease;

  :hover,
  :active {
    background-color: var(--primary);
    color: var(--white);
  }

  :active {
    transform: scale(0.99);
  }
`;
