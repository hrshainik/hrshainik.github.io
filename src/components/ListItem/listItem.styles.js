import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  padding-left: 1.5rem;
`;

export const Item = styled.li`
  padding-bottom: 0.2rem;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    left: -1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: transparent;
    border: 1.5px solid var(--primary);
  }
`;
