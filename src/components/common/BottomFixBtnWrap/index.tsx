import * as S from "./BottomFixBtnWrap.styled";

interface BottomFixBtnWrapProps {
  children?: React.ReactNode;
}
const BottomFixBtnWrap: React.FC<BottomFixBtnWrapProps> = ({ children }) => {
  return <S.BottomFixWrap>{children}</S.BottomFixWrap>;
};

export default BottomFixBtnWrap;
