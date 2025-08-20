import CardsFeatured from "../../components/FeaturedProjectsComponents/CardsFeatured";
import { data } from "../../mocks/FeaturedProjectsData";
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
        {data.map((project) => (
          <CardsFeatured
            key={project.id}
            mainIcon={project.mainIcon}
            url={project.url}
            title={project.title}
            description={project.description}
            technologies={project.tech}
          />
        ))}
      </ProjectsContainer>
    </FeaturedProjectsContainer>
  );
};

export default FeaturedProjects;
