import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: var(--white);
  position: relative;

  ::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 4rem;
    height: 0.4rem;
    background-color: var(--primary);
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 5rem;
    width: calc(100% - 5rem);
    height: 0.4rem;
    background-color: rgba(222, 199, 146, 0.45);
  }
`;

export const SubTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 400;
  color: #dadada;
  margin-top: 0.4rem;
`;
