import { createContext } from "react";
import { type PaletteType } from "../../constants/colors";

interface ThemeContextType {
  palette: PaletteType;
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
