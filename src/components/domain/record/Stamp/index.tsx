import UseImgix from "components/common/Imgix";
import {
  ColorLightBlack5,
  ColorLightBlack9Base,
  TextBase1624Semibold,
} from "lds-common/src/constants/tokens/global";
import Text from "components/common/Text";
import * as S from "./Stamp.styled";

interface StampProps {
  active: boolean;
  imgUrl: string;
  title: string;
}

const Stamp = ({ active, imgUrl, title }: StampProps) => {
  return (
    <S.StampWrap>
      <S.StampImage active={active}>
        <UseImgix srcUrl="/images/badge.svg" alt="markAsRead" style={{ width: "0.5rem" }} />
        <UseImgix srcUrl={imgUrl} alt={title} />
      </S.StampImage>
      <Text variant={TextBase1624Semibold} color={active ? ColorLightBlack9Base : ColorLightBlack5}>
        {title}
      </Text>
    </S.StampWrap>
  );
};

export default Stamp;
