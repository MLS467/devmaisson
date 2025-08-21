import { CardAboutContainer } from "./style";
import { useTheme } from "../../../Hooks/useTheme";
import type { ReactNode } from "react";

interface CardAboutProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const CardsAbout = ({ icon, title, description }: CardAboutProps) => {
  const { palette } = useTheme();

  return (
    <CardAboutContainer $palette={palette}>
      <div className="iconConteiner">{icon}</div>

      <div className="titleCardConteiner">
        <span className="titleConteiner">{title}</span>
        <span className="descConteiner">{description}</span>
      </div>
    </CardAboutContainer>
  );
};

export default CardsAbout;
