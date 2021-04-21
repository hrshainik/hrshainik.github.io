import styled, { keyframes } from "styled-components";

export const LoaderContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const anim = keyframes`
  0% {
    transform: scale(0, 0);
    opacity:0.8;
  }
  100% {
    transform: scale(1, 1);
    opacity:0;
  }
`;

export const Loading = styled.span`
  position: absolute;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: var(--primary);
  animation: ${anim} 1.5s linear infinite;

  &:first-child {
    animation-delay: -0.9s;
  }
`;
