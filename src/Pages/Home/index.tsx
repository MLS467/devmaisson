import DescriptionPage from "../../components/HomeComponents/DescriptionPage";
import ButtonWrapper from "../../components/HomeComponents/ButtonWrapper";
import { ArrowBackContainer } from "../../components/HomeComponents/DescriptionPage/style";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useTheme } from "../../Hooks/useTheme";

const Home = () => {
  const context = useTheme();

  return (
    <DescriptionPage>
      <ButtonWrapper />
      <ArrowBackContainer>
        <FaRegArrowAltCircleDown
          size={30}
          color={context?.palette?.fontSeconry}
        />
      </ArrowBackContainer>
    </DescriptionPage>
  );
};

export default Home;
