import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/Theme/theme.tsx";
import AppWithToast from "./components/AppWithToast";

document.title = import.meta.env.VITE_APP_NAME;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWithToast />
    </ThemeProvider>
  </StrictMode>
);
