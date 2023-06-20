import UseImgix from "../../../../components/common/Imgix";
import * as S from "./Visual.styled";

const Visual = () => {
  return (
    <S.Wrap>
      <UseImgix srcUrl="/images/home-bg-20230209.png" alt="Home Background" />
      <S.Title>우리 아이 잘 자라고 있는 걸까?</S.Title>
      <S.Content>발달에 맞는 전문 코칭을 받아보세요.</S.Content>
    </S.Wrap>
  );
};

export default Visual;
