import ButtonDefault from "../../ButtonDefault";
import { data } from "../../../mocks/DescriptionPageData";
import { lightPalette } from "../../../constants/colors";
import { ButtonContainer } from "./style";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import Links from "../Links";
import { BsWhatsapp } from "react-icons/bs";

const ButtonWrapper = () => {
  return (
    <ButtonContainer>
      <Links link={data.linksButton.github}>
        <ButtonDefault text={data.button[0]}>
          <LuGithub />
        </ButtonDefault>
      </Links>

      <Links link={data.linksButton.linkedin}>
        <ButtonDefault text={data.button[1]}>
          <FiLinkedin />
        </ButtonDefault>
      </Links>

      <Links link={data.linksButton.whatsapp}>
        <ButtonDefault text={data.button[2]} bgColor={lightPalette.blueDefault}>
          <BsWhatsapp />
        </ButtonDefault>
      </Links>
    </ButtonContainer>
  );
};

export default ButtonWrapper;
