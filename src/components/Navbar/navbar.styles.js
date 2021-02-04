import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100vw;
  height: 8rem;
  background-color: var(--bgOne);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  border-top: 1px solid var(--primary);
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: color 300ms ease;
  text-decoration: none;
  color: var(--white);
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;

  :hover,
  :active,
  :focus {
    color: var(--primary);
    cursor: pointer;
  }
`;
