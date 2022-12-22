import styled from 'styled-components';
import { Title } from '..';

const PriceSectionWrapper = styled.div`
  height: 16rem;
  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
`;

const DiscountSection = styled.div`
  padding-bottom: 1rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;

  span {
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

const OriginalPrice = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  text-decoration-line: line-through;

  margin-right: 0.5rem;

  color: #9d9d9d;
`;

const DiscountPercentage = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fd7473;
`;

const TotalPriceSection = styled.div`
  height: 2rem;
  padding-top: 1rem;

  display: flex;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: 700;
`;

const Num = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  color: rgba(10, 10, 10, 0.8);

  margin-right: 0.5rem;
  padding-top: 0.2rem;
`;

const PriceSection = () => {
  return (
    <PriceSectionWrapper>
      <Title>가격</Title>
      <DiscountSection>
        <span>할인</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <OriginalPrice>150000원</OriginalPrice>
          <DiscountPercentage>53%</DiscountPercentage>
        </div>
      </DiscountSection>
      <TotalPriceSection>
        <span>결제 가격</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Num>1회</Num>
          <span>70000원</span>
        </div>
      </TotalPriceSection>
    </PriceSectionWrapper>
  );
};

export default PriceSection;
