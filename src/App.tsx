import { AppContainer } from "./style/appStyle";
import { useContext } from "react";
import { ThemeContext } from "./context/Theme/themeContext";
import type { PaletteType } from "./constants/colors";
import { lightPalette } from "./constants/colors";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  const context = useContext(ThemeContext);

  const palette: PaletteType = context?.palette || lightPalette;

  return (
    <AppContainer palette={palette}>
      <Home />
      <About />
    </AppContainer>
  );
}

export default App;
