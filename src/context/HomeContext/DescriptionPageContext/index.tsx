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
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <DescriptionPageContext.Provider value={{ title }}>
      {children}
    </DescriptionPageContext.Provider>
  );
};
