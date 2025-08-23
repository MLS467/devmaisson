import ButtonDefault from "../../ButtonDefault";
import { data } from "../../../mocks/DescriptionPageData";
import { lightPalette } from "../../../constants/colors";
import { ButtonContainer } from "./style";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import Links from "../Links";
import { BsWhatsapp } from "react-icons/bs";
import { useTheme } from "../../../Hooks/useTheme";

const ButtonWrapper = () => {
  const { palette } = useTheme();

  return (
    <ButtonContainer>
      <Links link={data.linksButton.github}>
        <ButtonDefault text={data.button[0]} palette={palette}>
          <LuGithub />
        </ButtonDefault>
      </Links>

      <Links link={data.linksButton.linkedin}>
        <ButtonDefault text={data.button[1]} palette={palette}>
          <FiLinkedin />
        </ButtonDefault>
      </Links>

      <Links link={data.linksButton.whatsapp}>
        <ButtonDefault
          text={data.button[2]}
          bgColor={lightPalette.blueDefault}
          palette={palette}
        >
          <BsWhatsapp />
        </ButtonDefault>
      </Links>
    </ButtonContainer>
  );
};

export default ButtonWrapper;
