import { useTheme } from "../../../Hooks/useTheme";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeButton } from "./style";

const ThemeToggle = () => {
  const { isDark, toggleTheme, palette } = useTheme();

  return (
    <ThemeButton onClick={toggleTheme} palette={palette}>
      {isDark ? <MdLightMode /> : <MdDarkMode />}
    </ThemeButton>
  );
};

export default ThemeToggle;
