import styled from "styled-components";

interface HeaderCardsContainerProps {
  palette: {
    background: string;
    greenDefault: string;
    fontPrimary: string;
  };
}

export const HeaderCardsContainer = styled.div<HeaderCardsContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 30px;
  background-color: ${({ palette }) => palette.background};
  border-radius: 8px;

  .iconContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .titleContainer {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
      font-size: 1.2rem;
      font-weight: bold;
      color: ${({ palette }) => palette.fontPrimary};
    }
  }

  &:hover {
    .icon {
      transform: scale(1.5);
      transform-origin: center;
      transition: all 0.5s ease;
    }

    .iconGitHub {
      color: ${({ palette }) => palette.greenDefault};
      transform: scale(1.3);
    }
  }
`;

export const HeaderCardsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
