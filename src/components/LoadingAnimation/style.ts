import styled, { keyframes } from "styled-components";
import type { PaletteType } from "../../constants/colors";

// Animação do spinner
const spinnerRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Animação dos pontos
const dotsAnimation = keyframes`
  0%, 20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Animação de fade in da página
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoadingContainer = styled.div<{ $palette: PaletteType }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ $palette }) => $palette.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
`;

export const LoadingSpinner = styled.div<{ $palette: PaletteType }>`
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 2rem;

  .spinner-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-radius: 50%;
    animation: ${spinnerRotate} 1.5s linear infinite;

    &:nth-child(1) {
      border-top-color: ${({ $palette }) => $palette.blueDefault};
      animation-delay: 0s;
    }

    &:nth-child(2) {
      border-right-color: ${({ $palette }) => $palette.greenDefault};
      animation-delay: -0.5s;
      width: 90%;
      height: 90%;
      top: 5%;
      left: 5%;
    }

    &:nth-child(3) {
      border-bottom-color: ${({ $palette }) => $palette.fontPrimary};
      animation-delay: -1s;
      width: 80%;
      height: 80%;
      top: 10%;
      left: 10%;
    }
  }
`;

export const LoadingText = styled.h2<{ $palette: PaletteType }>`
  color: ${({ $palette }) => $palette.fontPrimary};
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const LoadingDots = styled.span`
  display: inline-flex;

  span {
    animation: ${dotsAnimation} 1.5s infinite;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
`;

export const PageWrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "30px")});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  animation: ${({ $isVisible }) => $isVisible && fadeInUp} 0.8s ease-out;
`;
