import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: var(--bgOne);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  width: 90vw;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  height: 100%;
  padding: 2.2rem 0;
`;

export const Logo = styled.img`
  height: 100%;
`;

export const ListItems = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  list-style: none;
  margin-left: 3rem;
`;

export const Anchor = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  font-size: 2rem;
`;
