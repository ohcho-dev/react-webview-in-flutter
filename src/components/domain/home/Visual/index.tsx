import UseImgix from "../../../../components/common/Imgix";
import * as S from "./Visual.styled";

const Visual = () => {
  return (
    <S.Wrap>
      <UseImgix srcUrl="/images/home_final.svg" alt="Home Background" />
    </S.Wrap>
  );
};

export default Visual;
