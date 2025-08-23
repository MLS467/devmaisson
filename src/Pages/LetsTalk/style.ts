import styled from "styled-components";
import type { PaletteType } from "../../constants/colors";

export const LetsTalkContainer = styled.div<{ $palette: PaletteType }>`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

export const LeftSection = styled.div<{ $palette: PaletteType }>`
  > p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${({ $palette }) => $palette.fontSeconry};
    margin-bottom: 2rem;
  }
`;

export const ContactInfo = styled.div`
  margin-bottom: 3rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ContactIcon = styled.div<{ $palette: PaletteType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  margin-right: 1rem;

  ${ContactItem}:nth-child(1) & {
    background: ${({ $palette }) => $palette.blueDefault}15;
    color: ${({ $palette }) => $palette.blueDefault};
  }

  ${ContactItem}:nth-child(2) & {
    background: ${({ $palette }) => $palette.greenDefault}15;
    color: ${({ $palette }) => $palette.greenDefault};
  }

  ${ContactItem}:nth-child(3) & {
    background: ${({ $palette }) => $palette.blueDefault}15;
    color: ${({ $palette }) => $palette.blueDefault};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ContactDetails = styled.div``;

export const ContactTitle = styled.div<{ $palette: PaletteType }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $palette }) => $palette.fontPrimary};
  margin-bottom: 0.25rem;
`;

export const ContactValue = styled.div<{ $palette: PaletteType }>`
  font-size: 0.925rem;
  color: ${({ $palette }) => $palette.fontSeconry};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialButton = styled.button<{ $palette: PaletteType }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid ${({ $palette }) => $palette.fontSeconry}30;
  border-radius: 8px;
  color: ${({ $palette }) => $palette.fontPrimary};
  font-size: 0.925rem;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: ${({ $palette }) => $palette.blueDefault};
    color: ${({ $palette }) => $palette.blueDefault};
    transform: translateY(-2px);
  }
`;

export const RightSection = styled.div`
  @media (max-width: 768px) {
    order: -1; /* Coloca o formulário acima dos contatos no mobile */
    width: 100%;
    max-width: none;
  }
`;

export const FormContainer = styled.form<{ $palette: PaletteType }>`
  background: ${({ $palette }) =>
    $palette.background === "#0f0f10"
      ? "rgba(255, 255, 255, 0.03)"
      : "rgba(0, 0, 0, 0.02)"};
  border: 1px solid ${({ $palette }) => $palette.fontSeconry}20;
  border-radius: 16px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 16px;
    background: ${({ $palette }) =>
      $palette.background === "#0f0f10"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.03)"};
    border: 1px solid ${({ $palette }) => $palette.fontSeconry}40;
    box-shadow: 0 8px 32px ${({ $palette }) => $palette.fontSeconry}15;
    width: 100%;
    max-width: none;
    margin: 0;
  }
`;

export const FormTitle = styled.h3<{ $palette: PaletteType }>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ $palette }) => $palette.fontPrimary};
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin: 0 0 1.75rem 0;
    text-align: center;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }
`;

export const Label = styled.label<{ $palette: PaletteType }>`
  display: block;
  font-size: 0.925rem;
  font-weight: 500;
  color: ${({ $palette }) => $palette.fontPrimary};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }
`;

export const Input = styled.input<{ $palette: PaletteType }>`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${({ $palette }) =>
    $palette.background === "#0f0f10"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.03)"};
  border: 1px solid ${({ $palette }) => $palette.fontSeconry}30;
  border-radius: 8px;
  color: ${({ $palette }) => $palette.fontPrimary};
  font-size: 0.925rem;
  transition: all 0.3s ease;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border-radius: 12px;
    background: ${({ $palette }) =>
      $palette.background === "#0f0f10"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.05)"};
    border: 1px solid ${({ $palette }) => $palette.fontSeconry}40;
  }

  &::placeholder {
    color: ${({ $palette }) => $palette.fontSeconry};
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border-color: ${({ $palette }) => $palette.blueDefault};
    box-shadow: 0 0 0 3px ${({ $palette }) => $palette.blueDefault}20;
    background: ${({ $palette }) =>
      $palette.background === "#0f0f10"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.02)"};
  }
`;

export const TextArea = styled.textarea<{ $palette: PaletteType }>`
  width: 100%;
  min-height: 120px;
  padding: 0.75rem 1rem;
  background: ${({ $palette }) =>
    $palette.background === "#0f0f10"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.03)"};
  border: 1px solid ${({ $palette }) => $palette.fontSeconry}30;
  border-radius: 8px;
  color: ${({ $palette }) => $palette.fontPrimary};
  font-size: 0.925rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border-radius: 12px;
    min-height: 120px;
    background: ${({ $palette }) =>
      $palette.background === "#0f0f10"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.05)"};
    border: 1px solid ${({ $palette }) => $palette.fontSeconry}40;
  }

  &::placeholder {
    color: ${({ $palette }) => $palette.fontSeconry};
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border-color: ${({ $palette }) => $palette.blueDefault};
    box-shadow: 0 0 0 3px ${({ $palette }) => $palette.blueDefault}20;
    background: ${({ $palette }) =>
      $palette.background === "#0f0f10"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.02)"};
  }
`;
