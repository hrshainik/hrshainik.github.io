import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 90vw;
  max-width: var(--maxWidth);
  margin: 0 auto;
  height: 9rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin-bottom: ${(props) => (props.isMobile ? "8rem" : "0")};
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
  transition: color 300ms ease, transform 300ms ease;

  :hover,
  :active {
    color: var(--primary);
  }

  :active {
    transform: scale(0.95);
  }
`;

export const LightText = styled.p`
  color: #efefef;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  padding-top: 1.5rem;
`;

export const UpperSec = styled.div`
  display: flex;
  justify-content: space-between;
`;
