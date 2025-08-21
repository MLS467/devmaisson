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

    typed.current = new Typed(title.current, {
      strings: data.name,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      smartBackspace: false,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <DescriptionPageContext.Provider value={{ title }}>
      {children}
    </DescriptionPageContext.Provider>
  );
};
