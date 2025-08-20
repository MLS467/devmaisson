import styled from "styled-components";

export const FeaturedProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const TitleContainer = styled.div`
  margin-bottom: 32px;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  border: 1px solid red;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
`;
