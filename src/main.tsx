import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemedGlobalStyle } from "./style/ThemedGlobalStyle";
import App from "./App.tsx";
import { DescriptionPageProvider } from "./context/HomeContext/DescriptionPageContext/index.tsx";
import { ThemeProvider } from "./context/Theme/theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemedGlobalStyle />
      <DescriptionPageProvider>
        <App />
      </DescriptionPageProvider>
    </ThemeProvider>
  </StrictMode>
);
