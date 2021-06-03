import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div``;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;

export const Logo = styled.img``;

export const ListItems = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  list-style: none;
  margin-left: 2rem;
`;

export const Anchor = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  font-size: 2rem;
`;
