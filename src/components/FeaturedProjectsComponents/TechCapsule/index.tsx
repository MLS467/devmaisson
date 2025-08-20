import { useTheme } from "../../../Hooks/useTheme";
import { CapsuleContainer } from "./style";

const Capsule = ({ title }: { title: string }) => {
  const { palette } = useTheme();

  return (
    <CapsuleContainer palette={palette}>
      <span>{title}</span>
    </CapsuleContainer>
  );
};

export default Capsule;
