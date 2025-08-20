import {
  FeaturedProjectsContainer,
  ProjectsContainer,
  TitleContainer,
} from "./style";

const FeaturedProjects = () => {
  return (
    <FeaturedProjectsContainer>
      <TitleContainer className="titleContainer">
        <h1>Projetos em destaque</h1>
      </TitleContainer>

      <ProjectsContainer className="projectsContainer">
        <p>Projeto 1</p>
        <p>Projeto 2</p>
        <p>Projeto 3</p>
      </ProjectsContainer>
    </FeaturedProjectsContainer>
  );
};

export default FeaturedProjects;
