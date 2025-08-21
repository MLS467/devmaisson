import {
  SupplementaryMaterialContainer,
  IconContainer,
  ContentContainer,
  Title,
  Description,
  ButtonsContainer,
} from "./style";
import { useTheme } from "../../Hooks/useTheme";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface SupplementaryMaterialComponentProps {
  Icon: IconType;
  title: string;
  description: string;
  children: ReactNode;
}

const SupplementaryMaterialComponent = ({
  Icon,
  title,
  description,
  children,
}: SupplementaryMaterialComponentProps) => {
  const { palette } = useTheme();

  return (
    <SupplementaryMaterialContainer palette={palette}>
      <IconContainer palette={palette}>
        <Icon />
      </IconContainer>

      <ContentContainer>
        <Title palette={palette}>{title}</Title>
        <Description palette={palette}>{description}</Description>
      </ContentContainer>

      <ButtonsContainer>{children}</ButtonsContainer>
    </SupplementaryMaterialContainer>
  );
};

export default SupplementaryMaterialComponent;
