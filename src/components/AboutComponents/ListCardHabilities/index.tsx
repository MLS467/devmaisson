import TechHabilities from "../../TecHabilities";
import { FaCode, FaDatabase } from "react-icons/fa";
import {
  backendTechnologies,
  databaseTechnologies,
  frontendTechnologies,
  mobileTechnologies,
  TechTitle,
  testingTechnologies,
  toolsTechnologies,
} from "../../../mocks/TechnologiesData";
import { CiServer } from "react-icons/ci";
import { LiaToolsSolid } from "react-icons/lia";
import { GrTest } from "react-icons/gr";
import { useTheme } from "../../../Hooks/useTheme";
import { CardTechContainer, CardTechContent } from "./style";
import { FaMobileScreenButton } from "react-icons/fa6";
import HeaderPagesDefault from "../../HeaderPagesDefault";

const ListCardHabilities = () => {
  const { palette } = useTheme();

  return (
    <CardTechContainer palette={palette}>
      <HeaderPagesDefault
        title={TechTitle.title}
        description={TechTitle.subtitle}
      />
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
