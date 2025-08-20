import { TimelineItemContainer } from "./style.ts";
import { useTheme } from "../../Hooks/useTheme";
import type { ReactNode } from "react";

interface TimelineComponentProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  dates: string;
  local: string;
}

const TimeLineComponents = ({
  icon,
  title,
  subtitle,
  description,
  dates,
  local,
}: TimelineComponentProps) => {
  const { palette } = useTheme();

  return (
    <TimelineItemContainer palette={palette}>
      <div className="timelineIcon">{icon}</div>

      <div className="timelineContent">
        <div className="timelineHeader">
          <h3 className="timelineTitle">{title}</h3>
          <span className="timelineDates">{dates}</span>
        </div>

        <div className="timelineSubtitle">{subtitle}</div>
        <div className="timelineLocal">{local}</div>
        <p className="timelineDescription">{description}</p>
      </div>

      <div className="timelineLine"></div>
    </TimelineItemContainer>
  );
};

export default TimeLineComponents;
