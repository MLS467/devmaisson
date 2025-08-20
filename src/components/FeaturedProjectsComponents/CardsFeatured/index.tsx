import { useTheme } from "../../../Hooks/useTheme";
import HeaderCards from "../HeaderCards";
import {
  CapsulesTech,
  CardsFeaturedContainer,
  DescriptionContainer,
} from "./style";
import { FiGithub } from "react-icons/fi";
import Capsule from "../TechCapsule";
import type { IconType } from "react-icons";

interface CardsFeaturedProps {
  mainIcon: IconType;
  url: string;
  title: string;
  description: string;
  technologies: string[];
}

const CardsFeatured = ({
  mainIcon,
  title,
  url,
  description,
  technologies,
}: CardsFeaturedProps) => {
  const { palette } = useTheme();

  return (
    <CardsFeaturedContainer palette={palette}>
      <HeaderCards url={url} icon={mainIcon} icon2={FiGithub} title={title} />

      <DescriptionContainer palette={palette}>
        {description}
      </DescriptionContainer>
      <CapsulesTech>
        {technologies.map((tech) => (
          <Capsule key={`CardsFeatured-${tech}`} title={tech} />
        ))}
      </CapsulesTech>
    </CardsFeaturedContainer>
  );
};

export default CardsFeatured;
