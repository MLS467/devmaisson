import styled from "styled-components";
import type { PaletteType } from "../../../constants/colors";

interface CardContainerProps {
  palette: PaletteType;
}

export const DescriptionContainer = styled.div<CardContainerProps>`
  width: 100%;
  max-height: 100px;
  overflow: hidden;
  padding: 0 1rem;
  font-size: 16px;
  color: ${({ palette }) => palette.fontSeconry};
  line-height: 1.6;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    max-height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.3s ease;

  &:hover {
    color: ${({ palette }) => palette.fontPrimary};
  }
`;

export const CardsFeaturedContainer = styled.div<CardContainerProps>`
  width: 100%;
  max-width: 350px;
  height: auto;
  min-height: 300px;
  background-color: ${({ palette }) => palette.background};
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto;

  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 20px ${({ palette }) => palette.blueDefault}30,
    0 0 30px ${({ palette }) => palette.greenDefault}20,
    0 4px 16px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15),
      0 0 30px ${({ palette }) => palette.blueDefault}50,
      0 0 40px ${({ palette }) => palette.greenDefault}40,
      0 8px 24px rgba(0, 0, 0, 0.2);

    .iconContainer a {
      opacity: 1;
      visibility: visible;
    }

    ${DescriptionContainer} {
      max-height: none;
      -webkit-line-clamp: unset;
      display: block;
      overflow: visible;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.2rem;
    gap: 1rem;
    min-height: 250px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.8rem;
    min-height: 220px;
  }
`;

export const CapsulesTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;
