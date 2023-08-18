import Icon from "lds-common/src/components/Icon";
import Text from "lds-common/src/components/Text";
import {
  ColorLightBlack4,
  ColorLightBlack5,
  ColorLightBlack7,
  ColorLightEltern8,
  TextBase1624Regular,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import * as S from "./CouponItem.styled";

interface CouponItemProps {
  info: { name: string; desc: string; id: number };
  checked: boolean;
  expired?: boolean;
}

const CouponItem = ({ info, checked, expired }: CouponItemProps) => {
  const { name, desc } = info;
  return (
    <S.Wrapper>
      <S.CouponInfoSection>
        <Text variant={TextBase1624Regular} color={expired ? ColorLightBlack4 : ColorLightBlack7}>
          {name}
        </Text>
        <Text variant={TextSm1420Regular} color={expired ? ColorLightBlack4 : ColorLightBlack5}>
          {desc}
        </Text>
      </S.CouponInfoSection>
      <S.SelectedIconSection>
        {checked && <Icon icon={"only_checkbox"} size={28} fill={ColorLightEltern8} />}
      </S.SelectedIconSection>
    </S.Wrapper>
  );
};

export default CouponItem;
