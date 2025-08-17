import styled from "styled-components";
import { palette } from "../../../constants/colors";
import { marking } from "../../../style/utilStyle";

export const DescriptionPageContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  ${marking()}

  .descriptionContainer {
    margin: 20px 0;
    span {
      font-size: 16px;
      color: #666;
      text-align: center;
      max-width: 600px;
    }
  }
`;

export const NameContainer = styled.div`
  h1 {
    font-size: 4rem;
    color: ${palette.fontPrimary};
    font-weight: 700;
  }
`;

export const DeveloperContainer = styled.div`
  span {
    font-size: 1.8rem;
    color: ${palette.fontSeconry};
  }
`;

export const DescriptionContainer = styled.div`
  width: 60%;
  text-align: center;
  span {
    font-size: 1.35rem;
    color: ${palette.fontSeconry};
  }
`;
