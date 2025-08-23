import styled from "styled-components";
import { type PaletteType } from "../../../constants/colors";

interface StyledProps {
  palette: PaletteType;
  isDark?: boolean;
}

export const DescriptionPageContainer = styled.div<StyledProps>`
  display: flex;
  position: relative;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.palette.background};
  padding: 0 20px;

  .descriptionContainer {
    margin: 20px 0;
    span {
      font-size: 16px;
      color: ${(props) => props.palette.fontSeconry};
      text-align: center;
      max-width: 600px;
      line-height: 1.6;
    }
  }

  @media (max-width: 768px) {
    padding: 0 10px;
    gap: 12px;

    .descriptionContainer span {
      font-size: 14px;
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    height: auto;
    min-height: 100vh;
    padding: 20px 10px;
  }
`;

export const ThemeToggleWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;

  @media (max-width: 768px) {
    top: 2px;
    right: 2px;
  }

  @media (max-width: 480px) {
    top: 15px;
    right: 15px;
  }
`;

export const NameContainer = styled.div<StyledProps>`
  position: relative;
  text-align: center;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    height: 4rem !important;
    min-height: 4rem !important;
    white-space: nowrap;
    color: ${(props) => props.palette.fontPrimary};
    font-weight: 700;
    position: relative;
    z-index: 2;
    margin: 0;
    line-height: 1;
    display: inline-block;
  }

  .typed-cursor {
    display: inline-block;
    vertical-align: middle;
    font-weight: 700;
    opacity: 1;
    animation: typewriter-blink 1.2s infinite;
    line-height: 1;
    font-size: inherit;
    margin-left: 2px;
    color: ${(props) => props.palette.blueDefault};
  }

  @keyframes typewriter-blink {
    0%,
    45% {
      opacity: 1;
    }
    46%,
    100% {
      opacity: 0;
    }
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    height: 2rem;
    h1 {
      font-size: 1.5rem !important;
      height: 3rem !important;
      min-height: 3rem !important;
    }
  }

  @media (max-width: 480px) {
    height: 2.5rem;

    h1 {
      font-size: 2.5rem;
      height: 2.5rem !important;
      min-height: 2.5rem !important;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 2rem;
      min-height: 2rem !important;
    }
  }

  ${(props) =>
    props.isDark &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 10%;
      width: 200px;
      height: 200px;
      background: ${props.palette.blueDefault};
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.6;
      z-index: 1;
      animation: pulse1 4s ease-in-out infinite alternate;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 10%;
      width: 180px;
      height: 180px;
      background: ${props.palette.greenDefault};
      border-radius: 50%;
      filter: blur(90px);
      opacity: 0.5;
      z-index: 1;
      animation: pulse2 3.5s ease-in-out infinite alternate;
    }
  `}

  @keyframes pulse1 {
    0% {
      transform: translate(-50%, -50%) scale(0.7);
      opacity: 0.4;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 0.7;
    }
  }

  @keyframes pulse2 {
    0% {
      transform: translate(50%, -50%) scale(0.8);
      opacity: 0.3;
    }
    100% {
      transform: translate(50%, -50%) scale(1.2);
      opacity: 0.6;
    }
  }
`;

export const DeveloperContainer = styled.div<StyledProps>`
  text-align: center;

  span {
    font-size: 1.8rem;
    color: ${(props) => props.palette.fontSeconry};
  }

  @media (max-width: 768px) {
    span {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 480px) {
    span {
      font-size: 1.3rem;
    }
  }
`;

export const DescriptionContainer = styled.div<StyledProps>`
  width: 60%;
  text-align: center;
  max-width: 600px;

  span {
    font-size: 1.35rem;
    color: ${(props) => props.palette.fontSeconry};
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 80%;

    span {
      font-size: 0.8rem !important;
    }
  }

  @media (max-width: 480px) {
    width: 90%;

    span {
      font-size: 1rem;
    }
  }
`;

export const ArrowBackContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    bottom: 5vh;
  }

  svg {
    animation: bounce 1.2s infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(10px);
    }
    60% {
      transform: translateY(0);
    }
  }
`;
