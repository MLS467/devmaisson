import { AppContainer } from "./style/appStyle";
import { useContext } from "react";
import { ThemeContext } from "./context/Theme/themeContext";
import type { PaletteType } from "./constants/colors";
import { lightPalette } from "./constants/colors";
import Home from "./Pages/Home";
import About from "./Pages/About";
import FeaturedProjects from "./Pages/FeaturedProjects";
import TimeLine from "./Pages/TimeLine";
import SupplementaryMaterial from "./Pages/SupplementaryMaterial";
import LetsTalk from "./Pages/LetsTalk";
import Footer from "./Pages/Footer";

function App() {
  const context = useContext(ThemeContext);

  const palette: PaletteType = context?.palette || lightPalette;

  return (
    <AppContainer $palette={palette}>
      <Home />
      <About />
      <FeaturedProjects />
      <TimeLine />
      <SupplementaryMaterial />
      <LetsTalk />
      <Footer />
    </AppContainer>
  );
}

export default App;
