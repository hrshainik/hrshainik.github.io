import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export const Button = styled(Link)`
  text-decoration: none;
  color: var(--white);
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
  display: inline-block;
  border-bottom: 1px solid var(--white);
  transition: color 0.3s ease-in-out, border-bottom 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  :hover,
  :active {
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
  }

  :active {
    transform: scale(0.95);
  }
`;

export const Icon = styled(BsArrowRight)`
  font-size: 1.4rem;
`;
