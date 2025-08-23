import styled from "styled-components";
import type { PaletteType } from "../../constants/colors";

export const FooterContainer = styled.footer<{ $palette: PaletteType }>`
  margin-top: 4rem;
  width: calc(100vw - 9px);
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 2rem 0;
  background: ${({ $palette }) =>
    $palette.background === "#0f0f10"
      ? "rgba(255, 255, 255, 0.02)"
      : "rgba(0, 0, 0, 0.03)"};

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1.5rem 0;
  }
`;

export const Divider = styled.div<{ $palette: PaletteType }>`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ $palette }) => $palette.fontSeconry}30,
    transparent
  );
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    gap: 1rem;
  }
`;

export const FooterText = styled.h3<{ $palette: PaletteType }>`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ $palette }) => $palette.fontPrimary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
    justify-content: center;
  }
`;

export const SocialLink = styled.a<{ $palette: PaletteType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $palette }) =>
    $palette.background === "#0f0f10"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.05)"};
  color: ${({ $palette }) => $palette.fontSeconry};
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${({ $palette }) => $palette.blueDefault};
    background: ${({ $palette }) => $palette.blueDefault}15;
    transform: translateY(-2px);
  }

  &:nth-child(1):hover {
    color: ${({ $palette }) => $palette.fontPrimary};
    background: ${({ $palette }) => $palette.fontPrimary}15;
  }

  &:nth-child(2):hover {
    color: #0077b5;
    background: #0077b515;
  }

  &:nth-child(3):hover {
    color: ${({ $palette }) => $palette.greenDefault};
    background: ${({ $palette }) => $palette.greenDefault}15;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const FooterCopyright = styled.p<{ $palette: PaletteType }>`
  font-size: 0.925rem;
  color: ${({ $palette }) => $palette.fontSeconry};
  margin: 0;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;
