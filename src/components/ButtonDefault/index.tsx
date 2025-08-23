import React from "react";
import { ButtonDefaultStyled } from "./style";
import { type PaletteType } from "../../constants/colors";

interface btn {
  text: string;
  children?: React.ReactNode;
  bgColor?: string;
  palette?: PaletteType;
}

const ButtonDefault = ({ text, children, bgColor, palette }: btn) => {
  return (
    <ButtonDefaultStyled $bgColor={bgColor} $palette={palette}>
      {children}
      <div className="textContainerButton">{text}</div>
    </ButtonDefaultStyled>
  );
};

export default ButtonDefault;
