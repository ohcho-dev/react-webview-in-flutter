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
  const numberFormatter = new Intl.NumberFormat("ko");

  return (
    <>
      {price === 0 || id === 5 ? (
        <S.Price>무료{perNum && <S.PerActivity>({perNum}회)</S.PerActivity>}</S.Price>
      ) : (
        <S.ProgramPriceSection>
          {discountPercentage > 0 && (
            <S.DiscountPercentage style={{ ...percentageStyle }}>
              {discountPercentage}%
            </S.DiscountPercentage>
          )}
          <S.Price style={{ ...priceStyle }}>
            {numberFormatter.format(price)}원{perNum && <S.PerActivity>({perNum}회)</S.PerActivity>}
          </S.Price>
          {originalPrice > 0 && (
            <S.OriginalPrice style={{ ...originalPriceStyle }}>
              {numberFormatter.format(originalPrice)}원
            </S.OriginalPrice>
          )}
        </S.ProgramPriceSection>
      )}
    </>
  );
};

export default ProgramPrice;
