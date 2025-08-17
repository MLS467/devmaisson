import {
  DescriptionContainer,
  DescriptionPageContainer,
  DeveloperContainer,
  NameContainer,
  ThemeToggleWrapper,
} from "./style";
import { data } from "../../../mocks/DescriptionPageData";
import ButtonWrapper from "../ButtonWrapper";
import { useDescription } from "../../../Hooks/useDescription";
import { useTheme } from "../../../Hooks/useTheme";
import ThemeToggle from "../ThemeToggle";

const DescriptionPage = () => {
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

      <ButtonWrapper />
    </DescriptionPageContainer>
  );
};

export default DescriptionPage;
