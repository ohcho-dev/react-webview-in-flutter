import UseImgix from "components/common/Imgix";
import * as S from "./FloatingImgForCoaching.styled";

const FloatingImgForCoaching = () => {
  return (
    <S.FloadingSection>
      <UseImgix srcUrl="/images/speech_bubble_for_coaching.svg" style={{ width: "26rem" }} />
    </S.FloadingSection>
  );
};

export default FloatingImgForCoaching;
