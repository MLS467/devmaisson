import { useTheme } from "../Hooks/useTheme";
import { GlobalStyle } from "./globalStyle";

export const ThemedGlobalStyle = () => {
  const { palette } = useTheme();

  return <GlobalStyle $palette={palette} />;
};
