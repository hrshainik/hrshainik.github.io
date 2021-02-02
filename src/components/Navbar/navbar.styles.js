import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 8rem;
  background-color: var(--bgOne);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: color 300ms ease;
  text-decoration: none;
  color: var(--white);

  :hover,
  :active,
  :focus {
    color: var(--primary);
    cursor: pointer;
  }
`;

export const NavLogo = styled.svg`
  width: 3.2rem;
  display: block;
  margin-bottom: 0.8rem;
  fill: var(--white);
  transition: fill 300ms ease;

  ${NavLink}:hover & {
    fill: var(--primary);
  }

  ${NavLink}:active & {
    fill: var(--primary);
  }

  ${NavLink}:focus & {
    fill: var(--primary);
  }
`;

export const NavText = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
`;
