import styled from "styled-components";

export const ProgramPriceSection = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  width: 100%;
`;

export const DiscountPercentage = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  color: #fd7473;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  color: #0a0a0a;
`;

export const OriginalPrice = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  color: #9d9d9d;
  text-decoration: line-through;
`;

export const PerActivity = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  color: #0a0a0a;
`;
