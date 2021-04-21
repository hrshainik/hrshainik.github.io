import styled from "styled-components";

export const LinkText = styled.a`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--white);
  text-decoration: none;
  border-bottom: 2px solid var(--white);
  transition: color 300ms ease, transform 300ms ease;

  :hover,
  :active {
    color: var(--primary);
    border-color: var(--primary);
  }

  :active {
    transform: scale(0.95);
  }
`;
