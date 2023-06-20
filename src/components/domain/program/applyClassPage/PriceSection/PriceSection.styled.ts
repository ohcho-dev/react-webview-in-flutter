import styled from "styled-components";

export const PriceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
`;

export const DiscountSection = styled.div`
  height: 3rem;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;

  span {
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

export const OriginalPrice = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  text-decoration-line: line-through;

  margin-right: 0.5rem;

  color: #9d9d9d;
`;

export const DiscountPercentage = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fd7473;
`;

export const TotalPriceSection = styled.div`
  height: 2rem;
  margin-top: 1rem;

  display: flex;

  justify-content: space-between;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 700;
`;

export const InformImg = styled.span`
  width: 100%;
  margin-top: 2rem;
`;

export const Num = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: rgba(10, 10, 10, 0.8);

  margin-right: 0.5rem;
`;
