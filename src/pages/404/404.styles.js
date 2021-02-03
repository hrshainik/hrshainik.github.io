import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundContainer = styled.div`
  width: 90vw;
  min-height: calc(100vh - 8.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFound = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 10rem;
  color: var(--primary);
`;

export const SubHeading = styled.h4`
  font-size: 2rem;
  color: var(--white);
`;

export const BackButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: var(--primary);
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  border-bottom: 2px solid var(--primary);
  text-transform: uppercase;
`;
