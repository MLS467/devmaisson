import React from "react";
import { ButtonCardStyled } from "./style.ts";
import { type PaletteType } from "../../constants/colors";

interface ButtonCardProps {
  children?: React.ReactNode;
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  palette?: PaletteType;
  className?: string;
}

const ButtonCard = ({
  children,
  text,
  icon,
  onClick,
  bgColor,
  palette,
  className,
}: ButtonCardProps) => {
  return (
    <ButtonCardStyled
      $bgColor={bgColor}
      $palette={palette}
      onClick={onClick}
      className={className}
    >
      {icon && icon}
      {text && text}
      {children}
    </ButtonCardStyled>
  );
};

export default ButtonCard;
