import type { IconType } from "react-icons";
import { useTheme } from "../../Hooks/useTheme";
import { TechCard, TitleContainer, TechGrid, TechItem } from "./style";
import Links from "../HomeComponents/Links";

interface Technology {
  name: string;
  imagePath: string;
  projectLink?: string;
}

interface TechProps {
  Icon?: IconType;
  titleTec: string;
  technologies: Technology[];
}

const TechHabilities = ({ Icon, titleTec, technologies }: TechProps) => {
  const { palette } = useTheme();

  return (
    <TechCard palette={palette}>
      <TitleContainer palette={palette}>
        {Icon && <Icon />}
        <h3>{titleTec}</h3>
      </TitleContainer>

      <TechGrid>
        {technologies.map((tech, index) => (
          <Links link={tech.projectLink ?? "#"} key={`link${index}`}>
            <TechItem palette={palette} className="tech-item">
              <img src={tech.imagePath} alt={tech.name} />
              <span>{tech.name}</span>
            </TechItem>
          </Links>
        ))}
      </TechGrid>
    </TechCard>
  );
};

export default TechHabilities;
