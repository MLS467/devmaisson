import { AboutContainer } from "./style";
import { useTheme } from "../../Hooks/useTheme";
import CardCompleted from "../../components/AboutComponents/CardsCompleted";
import ListCardHabilities from "../../components/AboutComponents/ListCardHabilities";
import HeaderPagesDefault from "../../components/HeaderPagesDefault";
import { dataContentAbout } from "../../mocks/AboutPageData";

const About = () => {
  const { palette } = useTheme();

  return (
    <AboutContainer palette={palette}>
      <HeaderPagesDefault
        title={dataContentAbout.titleSection}
        description={dataContentAbout.descriptionSection}
      />
      <div className="contentContainer">
        <div className="containerText">
          <p>
            {" "}
            Sou estudante do último semestre de{" "}
            <strong>Sistemas para Internet no IFSUL</strong>, uma instituição
            com nota máxima pelo MEC. Minha jornada no desenvolvimento web
            começou com curiosidade e se tornou uma verdadeira paixão.
          </p>
          <p>
            Dedico-me a criar soluções digitais que combinam funcionalidade
            excepcional com design intuitivo, sempre buscando as melhores
            práticas e tecnologias modernas.
          </p>
        </div>
        <div className="cardsInfo">
          <CardCompleted />
        </div>
      </div>

      <ListCardHabilities />
    </AboutContainer>
  );
};

export default About;
