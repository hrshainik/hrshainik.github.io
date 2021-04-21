import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const Back = styled(BiArrowBack)`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  transition: transform 200ms ease;

  :active {
    transform: scale(0.95);
  }
`;
