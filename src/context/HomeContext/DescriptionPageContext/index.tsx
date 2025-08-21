import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { data } from "../../../mocks/DescriptionPageData";
import { DescriptionPageContext } from "./DescriptionPageContext";

export const DescriptionPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const title = useRef<HTMLHeadingElement>(
    null
  ) as React.RefObject<HTMLHeadingElement>;
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (typed.current) typed.current.destroy();

    title.current.innerHTML = "";

    typed.current = new Typed("#typed-title", {
      strings: data.name,
      typeSpeed: 25, // Velocidade mais fluida
      backSpeed: 30, // Velocidade de apagamento mais rápida
      backDelay: 2000, // Mais tempo antes de apagar
      // startDelay: 500, // Delay inicial para melhor experiência
      smartBackspace: false, // Apaga tudo para manter tamanho fixo
      loop: true,
      showCursor: true,
      cursorChar: "|", // Cursor personalizado
      autoInsertCss: true,
      fadeOut: false, // Remove fade para transição mais fluida
      shuffle: false, // Mantém ordem das strings
      bindInputFocusEvents: false, // Melhora performance
      contentType: "html", // Permite HTML se necessário
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <DescriptionPageContext.Provider value={{ title }}>
      {children}
    </DescriptionPageContext.Provider>
  );
};
