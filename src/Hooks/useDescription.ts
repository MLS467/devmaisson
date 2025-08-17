import { useContext } from "react";
import { DescriptionPageContext } from "../context/HomeContext/DescriptionPageContext/DescriptionPageContext";

export const useDescription = () => {
  const context = useContext(DescriptionPageContext);

  if (!context) {
    throw new Error("useDescription must be used within a DescriptionProvider");
  }

  return context;
};
