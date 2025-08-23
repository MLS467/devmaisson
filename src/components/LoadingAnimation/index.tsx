import React, { useEffect, useState } from "react";
import { useTheme } from "../../Hooks/useTheme";
import {
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
  LoadingDots,
  PageWrapper,
} from "./style.ts";

interface LoadingAnimationProps {
  children: React.ReactNode;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ children }) => {
  const { palette } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Pequeno delay para permitir a transição suave
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }, 2000); // 2 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingContainer $palette={palette}>
          <LoadingSpinner $palette={palette}>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </LoadingSpinner>
          <LoadingText $palette={palette}>
            Carregando portfólio
            <LoadingDots>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </LoadingDots>
          </LoadingText>
        </LoadingContainer>
      )}

      <PageWrapper $isVisible={showContent}>{children}</PageWrapper>
    </>
  );
};

export default LoadingAnimation;
