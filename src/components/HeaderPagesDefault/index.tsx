import { useTheme } from "../../Hooks/useTheme";
import {
  HeaderPagesContainer,
  TimelineMainDescription,
  TimelineMainTitle,
} from "./style";

interface HeaderPagesDefaultProps {
  title: string;
  description: string;
}

const HeaderPagesDefault = ({
  title,
  description,
}: HeaderPagesDefaultProps) => {
  const { palette } = useTheme();

  return (
    <HeaderPagesContainer>
      <TimelineMainTitle palette={palette}>{title}</TimelineMainTitle>
      <TimelineMainDescription palette={palette}>
        {description}
      </TimelineMainDescription>
    </HeaderPagesContainer>
  );
};

export default HeaderPagesDefault;
