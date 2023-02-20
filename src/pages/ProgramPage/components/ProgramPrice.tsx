import styled from "styled-components";

interface ProgramPriceProps {
  originalPrice: number;
  price: number;
  discountPercentage: number;
  percentageStyle?: object;
  originalPriceStyle?: object;
  priceStyle?: object;
  perNum?: string;
}

const ProgramPriceSection = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  width: 100%;
`;

const DiscountPercentage = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  color: #fd7473;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  color: #0a0a0a;
`;

const OriginalPrice = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  color: #9d9d9d;
  text-decoration: line-through;
`;

const PerActivity = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  color: #0a0a0a;
`;

const ProgramPrice: React.FC<ProgramPriceProps> = props => {
  const {
    discountPercentage,
    price,
    originalPrice,
    percentageStyle,
    originalPriceStyle,
    priceStyle,
    perNum,
  } = props;
  const numberFormatter = new Intl.NumberFormat("ko");

  return (
    <>
      {price === 0 ? (
        <Price>무료{perNum && <PerActivity>({perNum}회)</PerActivity>}</Price>
      ) : (
        <Price>무료{perNum && <PerActivity>({perNum}회)</PerActivity>}</Price>
        // <ProgramPriceSection>
        //   {discountPercentage > 0 && (
        //     <DiscountPercentage style={{ ...percentageStyle }}>
        //       {discountPercentage}%
        //     </DiscountPercentage>
        //   )}
        //   <Price style={{ ...priceStyle }}>
        //     {numberFormatter.format(price)}원{perNum && <PerActivity>({perNum}회)</PerActivity>}
        //   </Price>
        //   {originalPrice > 0 && (
        //     <OriginalPrice style={{ ...originalPriceStyle }}>
        //       {numberFormatter.format(originalPrice)}원
        //     </OriginalPrice>
        //   )}
        // </ProgramPriceSection>
      )}
    </>
  );
};

export default ProgramPrice;
