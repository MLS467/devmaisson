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
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 8%;
    text-align: center;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
`;
