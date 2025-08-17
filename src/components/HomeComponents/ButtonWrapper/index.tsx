import ButtonDefault from "../../ButtonDefault";
import { data } from "../../../mocks/DescriptionPageData";
import { palette } from "../../../constants/colors";
import { ButtonContainer } from "./style";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const ButtonWrapper = () => {
  return (
    <ButtonContainer>
      <ButtonDefault text={data.button[0]}>
        <LuGithub />
      </ButtonDefault>

      <ButtonDefault text={data.button[1]}>
        <FiLinkedin />
      </ButtonDefault>
      <ButtonDefault text={data.button[2]} bgColor={palette.blueDefault}>
        <MdOutlineEmail />
      </ButtonDefault>
    </ButtonContainer>
  );
};

export default ButtonWrapper;
