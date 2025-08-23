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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 12px;
  }

  @media (max-width: 320px) {
    width: 80%;
    flex-direction: column;
    gap: 16px;
    margin-top: 4%;
  }

  @media (max-width: 280px) {
    width: 90%;
  }
`;
