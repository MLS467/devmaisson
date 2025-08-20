import { TimelineContainer } from "./style.ts";
import { useTheme } from "../../Hooks/useTheme";
import TimeLineComponents from "../../components/TimeLineComponents";
import { timelineData } from "../../mocks/TimelineData";
import HeaderPagesDefault from "../../components/HeaderPagesDefault/index.tsx";

// Ícones para cada item da timeline
const timelineIcons = [
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" />
  </svg>,
];

const TimeLine = () => {
  const { palette } = useTheme();

  return (
    <TimelineContainer palette={palette}>
      <HeaderPagesDefault
        title="Minha Trajetória"
        description="Acompanhe minha jornada profissional e acadêmica"
      />
      <div className="timelineList">
        {timelineData.map((item, index) => (
          <TimeLineComponents
            key={item.id}
            icon={timelineIcons[index] || timelineIcons[0]}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            dates={item.dates}
            local={item.local}
          />
        ))}
      </div>
    </TimelineContainer>
  );
};

export default TimeLine;
