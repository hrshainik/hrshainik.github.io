import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100vw;
  height: 8rem;
  background-color: var(--bgOne);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  z-index: 1000;
  border-top: 1px solid var(--primary);
`;

export const Nav = styled.div`
  width: 90vw;
  max-width: var(--maxWidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavAnchor = styled(NavLink)`
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
  cursor: pointer;
  transition: transform 200ms ease, color 200ms ease;

  :hover {
    color: var(--primary);
  }

  :active {
    transform: scale(0.95);
  }
`;
