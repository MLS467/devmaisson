import CardsFeatured from "../../components/FeaturedProjectsComponents/CardsFeatured";
import HeaderPagesDefault from "../../components/HeaderPagesDefault";
import { data } from "../../mocks/FeaturedProjectsData";
import { FeaturedProjectsContainer, ProjectsContainer } from "./style";

const FeaturedProjects = () => {
  return (
    <FeaturedProjectsContainer>
      <HeaderPagesDefault
        title="Projetos em destaque"
        description="Uma seleção dos meus melhores projetos"
      />

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
