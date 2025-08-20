import styled from "styled-components";

interface CapsuleContainerProps {
  palette: {
    greenDefault: string;
    [key: string]: string;
  };
}

export const CapsuleContainer = styled.div<CapsuleContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border-radius: 50px;
  background-color: ${({ palette }) => palette.background};
  border: 1px solid ${({ palette }) => palette.greenDefault};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ palette }) => palette.greenDefault}10;
    transform: scale(1.05);
  }

  span {
    font-size: 12px;
    font-weight: 500;
    color: ${({ palette }) => palette.greenDefault};
    text-align: center;
    line-height: 1;
    white-space: nowrap;
    letter-spacing: 0.5px;
  }
`;
