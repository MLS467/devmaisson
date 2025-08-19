import { FaCode, FaGraduationCap } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";
import CardsAbout from "../CardsAbout";
import { useTheme } from "../../../Hooks/useTheme";
import { data } from "../../../mocks/AboutPageData";

const CardCompleted = () => {
  const { palette } = useTheme();

  const icons = [
    <FaGraduationCap color={palette.blueDefault} size={32} />,
    <FaCode color={palette.greenDefault} size={32} />,
    <PiMedal color={palette.blueDefault} size={32} />,
  ];

  const cards = data.map((e, i) => {
    return (
      <CardsAbout
        key={`card-${i}`}
        title={e.title}
        description={e.desc}
        icon={icons[i]}
      />
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {cards}
    </div>
  );
};

export default CardCompleted;
