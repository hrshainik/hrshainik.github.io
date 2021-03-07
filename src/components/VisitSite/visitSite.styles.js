import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export const Button = styled(Link)`
  text-decoration: none;
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
  display: inline-block;
  border-bottom: 1px solid var(--white);
  transition: all 0.3s ease-in-out;

  :hover {
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
  }
`;

export const Icon = styled(BsArrowRight)`
  font-size: 1.4rem;
`;
