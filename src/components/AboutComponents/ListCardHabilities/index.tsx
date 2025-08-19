import TechHabilities from "../../TecHabilities";
import { FaCode, FaDatabase } from "react-icons/fa";
import {
  backendTechnologies,
  databaseTechnologies,
  frontendTechnologies,
  mobileTechnologies,
  testingTechnologies,
  toolsTechnologies,
} from "../../../mocks/TechnologiesData";
import { CiServer } from "react-icons/ci";
import { LiaToolsSolid } from "react-icons/lia";
import { GrTest } from "react-icons/gr";
import { useTheme } from "../../../Hooks/useTheme";
import { CardTechContainer, CardTechTitle, CardTechContent } from "./style";
import { FaMobileScreenButton } from "react-icons/fa6";

const ListCardHabilities = () => {
  const { palette } = useTheme();

  return (
    <CardTechContainer palette={palette}>
      <CardTechTitle palette={palette}>
        <span>Habilidades Técnicas</span>
      </CardTechTitle>
      <CardTechContent>
        <TechHabilities
          Icon={FaCode}
          titleTec="Front-end"
          technologies={frontendTechnologies}
        />
        <TechHabilities
          Icon={CiServer}
          titleTec="Back-end"
          technologies={backendTechnologies}
        />
        <TechHabilities
          Icon={LiaToolsSolid}
          titleTec="Ferramentas"
          technologies={toolsTechnologies}
        />
      </CardTechContent>
      <CardTechContent style={{ marginTop: "30px" }}>
        <TechHabilities
          Icon={FaDatabase}
          titleTec="Banco de dados"
          technologies={databaseTechnologies}
        />
        <TechHabilities
          Icon={GrTest}
          titleTec="Testes"
          technologies={testingTechnologies}
        />
        <TechHabilities
          Icon={FaMobileScreenButton}
          titleTec="Mobile"
          technologies={mobileTechnologies}
        />
      </CardTechContent>
    </CardTechContainer>
  );
};

export default ListCardHabilities;
