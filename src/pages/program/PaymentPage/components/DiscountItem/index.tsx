import Text from "components/common/Text";
import {
  ColorLightBlack7,
  ColorLightRed9Base,
  TextBase1624Regular,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import { getKoreanCurrencyNumberFormat } from "utils/numberFormat";
import * as S from "./DiscountItem.styled";

interface DiscountItemProps {
  title: string;
  discount_amount: number;
  discount_percentage: number;
}

const DiscountItem = ({ title, discount_amount, discount_percentage }: DiscountItemProps) => {
  return (
    <S.Wrapper>
      <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
        {title}
      </Text>
      <S.AmountWrapper>
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          {`-${getKoreanCurrencyNumberFormat(discount_amount)}원`}
        </Text>
        <Text variant={TextBase1624Regular} color={ColorLightRed9Base}>
          {`(${discount_percentage}%)`}
        </Text>
      </S.AmountWrapper>
    </S.Wrapper>
  );
};

export default DiscountItem;
