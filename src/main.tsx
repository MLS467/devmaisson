import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./style/globalStyle.tsx";
import App from "./App.tsx";
import { DescriptionPageProvider } from "./context/HomeContext/DescriptionPageContext/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <DescriptionPageProvider>
      <App />
    </DescriptionPageProvider>
  </StrictMode>
);
