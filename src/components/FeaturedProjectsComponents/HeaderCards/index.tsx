import type { IconType } from "react-icons";
import { HeaderCardsContainer } from "./style";
import { useTheme } from "../../../Hooks/useTheme";
import Links from "../../HomeComponents/Links";

const HeaderCards = ({
  icon: Icon,
  icon2: Icon2,
  url,
  title,
}: {
  icon: IconType;
  icon2: IconType;
  title: string;
  url: string;
}) => {
  const { palette } = useTheme();

  return (
    <HeaderCardsContainer palette={palette}>
      <div className="iconContainer">
        <Icon className="icon" size={40} color={palette.blueDefault} />
        <Links link={url}>
          <Icon2 className="iconGitHub" size={15} />
        </Links>
      </div>
      <div className="titleContainer">
        <span>{title ?? "Default Title"}</span>
      </div>
    </HeaderCardsContainer>
  );
};

export default HeaderCards;
