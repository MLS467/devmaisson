import {
  DescriptionContainer,
  DescriptionPageContainer,
  DeveloperContainer,
  NameContainer,
} from "./style";
import { data } from "../../../mocks/DescriptionPageData";
import ButtonWrapper from "../ButtonWrapper";
import { useDescription } from "../../../Hooks/useDescription";

const DescriptionPage = () => {
  const { title } = useDescription();

  return (
    <DescriptionPageContainer>
      <NameContainer className="titleContainer" id="titleContainer">
        <h1 ref={title}>{data.name}</h1>
      </NameContainer>

      <DeveloperContainer>
        <span>{data.developer}</span>
      </DeveloperContainer>

      <DescriptionContainer>
        <span>{data.description}</span>
      </DescriptionContainer>

      <ButtonWrapper />
    </DescriptionPageContainer>
  );
};

export default DescriptionPage;
