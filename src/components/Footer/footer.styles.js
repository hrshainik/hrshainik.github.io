import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const LogoWrapper = styled(Link)`
  width: 3.5rem;
`;

export const Logo = styled.img`
  width: 100%;
  display: block;
`;

export const LinkWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const LinkItem = styled.li`
  list-style: none;
  padding: 1rem;
`;

export const Anchor = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--white);
  font-size: 1.4rem;
`;
