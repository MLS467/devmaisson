import { useState, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";
import {
  lightPalette,
  darkPalette,
  type PaletteType,
} from "../../constants/colors";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const currentPalette: PaletteType = isDark ? darkPalette : lightPalette;

  return (
    <ThemeContext.Provider
      value={{
        palette: currentPalette,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
