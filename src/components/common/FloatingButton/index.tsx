import * as S from "./FloatingButton.styled";
import UseImgix from "../Imgix";

interface FloatingButtonProps {
  page: "main" | "detail";
  onClick: () => void;
  iconUrl: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ page = "", iconUrl = "", onClick }) => {
  return (
    <S.Container onClick={onClick} page={page}>
      <UseImgix srcUrl={iconUrl} />
    </S.Container>
  );
};

export default FloatingButton;
