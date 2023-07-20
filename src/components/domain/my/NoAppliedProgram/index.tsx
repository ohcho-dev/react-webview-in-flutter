import UseImgix from "components/common/Imgix";
import { useNavigate } from "react-router-dom";
import * as S from "./NoAppliedProgram.styled";

interface NoAppliedProgramProps {
  selectedTab: "코칭" | "클래스";
}

const NoAppliedProgram = ({ selectedTab }: NoAppliedProgramProps) => {
  const navigate = useNavigate();
  return (
    <S.NotFoundData>
      <UseImgix srcUrl="/images/icon-sparkle.png" alt="thumbnail" />
      <S.NotFoundTitle>아직 신청한 {selectedTab + "가"} 없어요.</S.NotFoundTitle>
      <S.NotFoundDesc>우리 아이 맞춤 {selectedTab + "를"} 신청해 보세요.</S.NotFoundDesc>
      <S.LinkBtn onClick={() => navigate("/program", { replace: true })}>
        프로그램 보러가기
      </S.LinkBtn>
    </S.NotFoundData>
  );
};

export default NoAppliedProgram;
