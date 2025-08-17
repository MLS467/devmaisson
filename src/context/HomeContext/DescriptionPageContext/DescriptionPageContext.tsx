import { createContext } from "react";

interface DescriptionPageContextType {
  title: React.RefObject<HTMLHeadingElement>;
}

export const DescriptionPageContext = createContext<
  DescriptionPageContextType | undefined
>(undefined);
