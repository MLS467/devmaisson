import type { ReactNode } from "react";
import { LinkStyle } from "./style";

type LinkProps = {
  children: ReactNode;
  link: string;
};

const Links = ({ children, link }: LinkProps) => {
  return (
    <LinkStyle
      style={{ display: "contents" }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </LinkStyle>
  );
};

export default Links;
