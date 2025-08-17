import DescriptionPage from "./components/HomeComponents/DescriptionPage";
import { AppContainer } from "./style/appStyle";
import { useContext } from "react";
import { ThemeContext } from "./context/Theme/themeContext";
import type { PaletteType } from "./constants/colors";
import { lightPalette } from "./constants/colors";

function App() {
  const context = useContext(ThemeContext);

  const palette: PaletteType = context?.palette || lightPalette;

  return (
    <AppContainer palette={palette}>
      <DescriptionPage />
    </AppContainer>
  );
}

export default App;
