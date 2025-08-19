import {
  DescriptionContainer,
  DescriptionPageContainer,
  DeveloperContainer,
  NameContainer,
  ThemeToggleWrapper,
} from "./style";
import { data } from "../../../mocks/DescriptionPageData";
import { useDescription } from "../../../Hooks/useDescription";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../../../Hooks/useTheme";

const DescriptionPage = ({ children }: { children: React.ReactNode }) => {
  const { title } = useDescription();
  const { palette } = useTheme();

  return (
    <DescriptionPageContainer palette={palette}>
      <ThemeToggleWrapper>
        <ThemeToggle />
      </ThemeToggleWrapper>
      <NameContainer
        palette={palette}
        className="titleContainer"
        id="titleContainer"
      >
        <h1 ref={title}>{data.name}</h1>
      </NameContainer>
      <DeveloperContainer palette={palette}>
        <span>{data.developer}</span>
      </DeveloperContainer>
      <DescriptionContainer palette={palette}>
        <span>{data.description}</span>
      </DescriptionContainer>
      {children}
    </DescriptionPageContainer>
  );
};

export default DescriptionPage;
