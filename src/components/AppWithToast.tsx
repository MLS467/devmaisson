import React from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemedGlobalStyle } from "../style/ThemedGlobalStyle";
import { DescriptionPageProvider } from "../context/HomeContext/DescriptionPageContext/index";
import { useTheme } from "../Hooks/useTheme";
import App from "../App";

const AppWithToast: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDark ? "dark" : "light"}
        transition={Bounce}
        limit={1}
      />
      <ThemedGlobalStyle />
      <DescriptionPageProvider>
        <App />
      </DescriptionPageProvider>
    </>
  );
};

export default AppWithToast;
