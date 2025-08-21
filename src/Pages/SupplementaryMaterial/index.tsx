import { IoIosDocument } from "react-icons/io";
import HeaderPagesDefault from "../../components/HeaderPagesDefault";
import SupplementaryMaterialComponent from "../../components/SupplementaryMaterialComponent";
import { ButtonDefaultStyled } from "../../components/ButtonDefault/style";
import { FaDownload, FaRegPlayCircle } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CardsContainer, SpeakMe, TextInfo } from "./style";
import { CiPlay1 } from "react-icons/ci";

export const SupplementaryMaterial = () => {
  const handleDownload = () => {
    const url = import.meta.env.VITE_DOWNLOAD_CURRICULO;
    const link = document.createElement("a");
    link.href = url;
    link.download = "Currículo_Completo_Maisson.pdf"; // nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPDF = () => {
    const url =
      "https://drive.google.com/file/d/1tjYTaOLw-2_izyAliVLDBlAP4NHyJ4fq/view?usp=drive_link";
    window.open(url, "_blank"); // abre em nova aba
  };

  return (
    <div>
      <HeaderPagesDefault
        title="Material Complementar"
        description="Aqui você encontrará materiais complementares."
      />

      <CardsContainer>
        <SupplementaryMaterialComponent
          Icon={IoIosDocument}
          title="Currículo Completo"
          description="Acesse meu currículo detalhado em PDF com todas as informações sobre formação, experiências e projetos realizados."
        >
          <ButtonDefaultStyled onClick={handleDownload}>
            <FaDownload />
            Currículo
          </ButtonDefaultStyled>
          <ButtonDefaultStyled onClick={handleOpenPDF}>
            <IoEyeSharp />
            Visualizar
          </ButtonDefaultStyled>
        </SupplementaryMaterialComponent>

        <SupplementaryMaterialComponent
          Icon={CiPlay1}
          title="Video Currículo"
          description="Acesse meu currículo detalhado em vídeo com todas as informações sobre formação, experiências e projetos realizados."
        >
          <ButtonDefaultStyled>
            <FaRegPlayCircle />
            Assistir
          </ButtonDefaultStyled>
        </SupplementaryMaterialComponent>
      </CardsContainer>
      <TextInfo>
        Interessado em conversar? Estou sempre aberto para novas oportunidades e
        projetos interessantes.
        <SpeakMe>
          <ButtonDefaultStyled>Vamos Conversar</ButtonDefaultStyled>
        </SpeakMe>
      </TextInfo>
    </div>
  );
};

export default SupplementaryMaterial;
