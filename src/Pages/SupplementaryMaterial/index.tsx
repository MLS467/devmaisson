import { IoIosDocument } from "react-icons/io";
import HeaderPagesDefault from "../../components/HeaderPagesDefault";
import SupplementaryMaterialComponent from "../../components/SupplementaryMaterialComponent";
import ButtonCard from "../../components/ButtonCard";
import { FaDownload, FaRegPlayCircle } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CardsContainer, SpeakMe, TextInfo } from "./style";
import { CiPlay1 } from "react-icons/ci";
import { useTheme } from "../../Hooks/useTheme";

export const SupplementaryMaterial = () => {
  const { palette } = useTheme();

  const handleDownload = () => {
    const url = import.meta.env.VITE_DOWNLOAD_CURRICULO;
    const link = document.createElement("a");
    link.href = url;
    link.download = "Currículo_Completo_Maisson.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPDF = () => {
    const url = import.meta.env.VITE_OPEN_CURRICULO;
    window.open(url, "_blank");
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
          <div
            style={{
              width: "100%",
              gap: "12px",
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1rem",
            }}
          >
            <ButtonCard onClick={handleDownload} palette={palette}>
              <FaDownload />
              Currículo
            </ButtonCard>
            <ButtonCard onClick={handleOpenPDF} palette={palette}>
              <IoEyeSharp />
              Visualizar
            </ButtonCard>
          </div>
        </SupplementaryMaterialComponent>

        <SupplementaryMaterialComponent
          Icon={CiPlay1}
          title="Video Currículo"
          description="Acesse meu currículo detalhado em vídeo com todas as informações sobre formação, experiências e projetos realizados."
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ButtonCard palette={palette}>
              <FaRegPlayCircle />
              Assistir
            </ButtonCard>
          </div>
        </SupplementaryMaterialComponent>
      </CardsContainer>
      <TextInfo>
        Interessado em conversar? Estou sempre aberto para novas oportunidades e
        projetos interessantes.
        <SpeakMe>
          <a
            href="#contact"
            style={{
              textDecoration: "none",
            }}
          >
            <ButtonCard palette={palette}>Vamos Conversar</ButtonCard>
          </a>
        </SpeakMe>
      </TextInfo>
    </div>
  );
};

export default SupplementaryMaterial;
