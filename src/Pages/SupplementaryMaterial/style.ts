import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 0 10rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const TextInfo = styled.p`
  padding: 35px 0;
  margin-top: 30px;
  text-align: center;
`;

export const SpeakMe = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  /* Controle do tamanho do botão apenas na versão desktop */
  @media (min-width: 1024px) {
    button {
      max-width: 200px;
      width: auto;
      padding: 12px 24px;
      font-size: 14px;
    }
  }

  /* Para tablet (768px) mantém o comportamento padrão */
  @media (max-width: 768px) and (min-width: 481px) {
    padding: 1.5rem;

    button {
      width: 100%;
      max-width: 350px;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    button {
      width: 100%;
      max-width: 300px;
    }
  }
`;
