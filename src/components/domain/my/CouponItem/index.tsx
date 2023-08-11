import Text from "components/common/Text";
import * as S from "./CouponItem.styled";
import {
  ColorLightBlack6,
  ColorLightBlack9Base,
  ColorLightEltern9Base,
  TextSm1420Regular,
  TextSm1420Semibold,
  TextXl2030Bold,
} from "lds-common/src/constants/tokens/global";
import UseImgix from "components/common/Imgix";
import { CouponItemType } from "types/domain/my";

interface CouponItem {
  item: CouponItemType;
}

const CouponItem = ({ item }: CouponItem) => {
  return (
    <S.CouponWrap>
      <UseImgix
        srcUrl="/images/coupon-bg.svg"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0, width: "100%" }}
      />
      <S.InfoSection>
        <Text variant={TextXl2030Bold} color={ColorLightBlack9Base} isEllipsis>
          {item.title}
        </Text>
        <Text
          variant={TextSm1420Regular}
          color={ColorLightBlack6}
          style={{ height: "4rem" }}
          isEllipsis
          ellipsisRow={2}
        >
          {item.desc}
        </Text>
      </S.InfoSection>
      <S.DateSection>
        <Text variant={TextSm1420Semibold} color={ColorLightEltern9Base}>
          {item.date}
        </Text>
      </S.DateSection>
    </S.CouponWrap>
  );
};

export default CouponItem;
