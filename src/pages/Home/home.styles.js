import styled from "styled-components";
import { Link } from "react-router-dom";
import line from "../../img/wavy-line.svg";

export const HomeContainer = styled.div`
  width: 90vw;
  max-width: var(--maxWidth);
`;

export const LogoContainer = styled(Link)`
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 6rem;
  padding: 2rem 1rem 1rem 1rem;
  display: block;
`;

export const Hero = styled.div`
  height: ${(props) =>
    props.isMobile ? "calc(100vh - 8.5rem)" : "calc(100vh - 8.5rem)"};

  ::before {
    content: "";
    position: absolute;
    background-color: var(--bgTwo);
    top: 0;
    right: 0;
    width: 50vw;
    height: ${(props) => (props.isMobile ? "calc(100vh - 8.5rem)" : "100vh")};
    z-index: -1;
  }

  ::after {
    content: "";
    position: absolute;
    top: ${(props) =>
      props.isMobile ? "calc(100vh - 8.5rem)" : "calc(100vh - 0.5rem)"};
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 0.5rem;
    background-color: var(--primary);
  }
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

export const GetInTouch = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--bgTwo);
  padding: 3rem 1rem;
  box-shadow: 50vw 0 0 var(--bgTwo), -50vw 0 0 var(--bgTwo), 0 0 0 var(--bgTwo);
`;

export const SpecialText = styled(Link)`
  font-size: 4.8rem;
  line-height: 70%;
  font-weight: 700;
  -webkit-text-stroke: 2px white;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  position: relative;
  transition: -webkit-text-stroke 300ms ease, transform 300ms ease;

  :hover {
    -webkit-text-stroke: 2px var(--primary);
  }

  ::after {
    content: "";
    position: absolute;
    background-image: url(${line});
    background-repeat: no-repeat;
    width: 100%;
    bottom: -0.2rem;
    height: 1rem;
    left: 0;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4d4d4d;
  margin-top: 1rem;
`;
