import * as S from "./ProgressStatusBadge.styled";

interface ProgressStatusBadgePropsType {
  isFinished: boolean;
}

const ProgressStatusBadge = ({ isFinished = false }: ProgressStatusBadgePropsType) => {
  return <S.BadgeWrapper isFinished={isFinished}>{isFinished ? "종료" : "진행중"}</S.BadgeWrapper>;
};

export default ProgressStatusBadge;
