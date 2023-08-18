import Text from "components/common/Text";
import {
  ColorLightBlack8,
  ColorLightRed9Base,
  ColorLightSlate9Base,
  TextBase1624Medium,
  TextBase1624Regular,
} from "lds-common/src/constants/tokens/global";
import { getKoreanCurrencyNumberFormat } from "utils/numberFormat";
import * as S from "./ProgramPrice.styled";

interface ProgramPriceProps {
  originalPrice: number;
  price: number;
  discountPercentage: number;
  percentageStyle?: object;
  originalPriceStyle?: object;
  priceStyle?: object;
  perNum?: string;
  id?: number;
}

const ProgramPrice: React.FC<ProgramPriceProps> = props => {
  const {
    discountPercentage,
    originalPrice,
    percentageStyle,
    originalPriceStyle,
    priceStyle,
    price,
    perNum,
    id,
  } = props;

  return (
    <>
      {price === 0 || id === 5 ? (
        <S.Price>무료{perNum && <S.PerActivity>({perNum}회)</S.PerActivity>}</S.Price>
      ) : (
        <S.ProgramPriceSection>
          {discountPercentage > 0 && (
            <Text color={ColorLightRed9Base} variant={TextBase1624Medium}>
              {`${discountPercentage}%`}
            </Text>
          )}
          <Text variant={TextBase1624Medium} color={ColorLightBlack8}>
            {`${getKoreanCurrencyNumberFormat(price)}원`}
          </Text>
          {perNum && <S.PerActivity>({perNum}회)</S.PerActivity>}
          {originalPrice > 0 && (
            <Text
              variant={TextBase1624Regular}
              color={ColorLightSlate9Base}
              style={{ textDecoration: "line-through" }}
            >{`${getKoreanCurrencyNumberFormat(originalPrice)}원`}</Text>
          )}
        </S.ProgramPriceSection>
      )}
    </>
  );
};

export default ProgramPrice;
