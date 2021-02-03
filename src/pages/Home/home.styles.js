import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  width: 90vw;
  min-height: calc(100vh - 8.5rem);
  position: relative;

  ::before {
    content: "";
    position: absolute;
    background-color: var(--bgTwo);
    top: 0;
    right: -5vw;
    width: 50vw;
    height: calc(100vh - 8.5rem);
    z-index: -1;
  }

  ::after {
    content: "";
    position: absolute;
    top: calc(100vh - 8.5rem);
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 0.5rem;
    background-color: var(--primary);
  }
`;

export const LogoContainer = styled(Link)`
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 6rem;
  padding: 2rem 1rem 1rem 1rem;
  display: block;
`;

export const HeadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 4.8rem;
  font-weight: 700;
  color: var(--primary);
  text-align: center;
  line-height: 105%;
  letter-spacing: 5%;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 4rem;
    height: 3px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
  }
`;

export const SubHeading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  margin-top: 0.8rem;
  letter-spacing: 1.2px;
`;
