import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 40%;
  display: flex;
  margin-top: 2%;
  padding: 10px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 768px) {
    width: 60%;
    gap: 12px;
  }

  @media (max-width: 480px) {
    width: 80%;
    flex-direction: column;
    gap: 16px;
    margin-top: 4%;
  }

  @media (max-width: 360px) {
    width: 90%;
  }
`;
