import React from "react";
import { ButtonDefaultStyled } from "./style";

interface btn {
  text: string;
  children?: React.ReactNode;
  bgColor?: string;
}

const ButtonDefault = ({ text, children, bgColor }: btn) => {
  return (
    <ButtonDefaultStyled $bgColor={bgColor}>
      {children}

      {text}
    </ButtonDefaultStyled>
  );
};

export default ButtonDefault;
