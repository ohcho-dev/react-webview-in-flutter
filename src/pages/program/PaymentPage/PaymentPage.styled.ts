import {
  ColorLight1,
  ColorLightBlack4,
  ColorLightEltern3,
  ColorLightEltern7,
  ColorLightSlate2,
  ColorLightSlate7,
} from "lds-common/src/constants/tokens/global";
import styled, { css } from "styled-components";

export const Section = styled.div`
  padding: 1.2rem 2rem 2.4rem;
`;

export const ProgramInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1.6rem;

  margin-top: 1.2rem;
`;

export const NameAndPriceSection = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 0.4rem;
`;

export const MainImageWrapper = styled.div`
  width: 9.6rem;
  height: 8.8rem;

  border-radius: 0.8rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ChildInfoWrapper = styled.div`
  width: 100%;
  padding: 1.6rem;

  display: flex;
  column-gap: 0.4rem;

  margin: 0.8rem 0 2.4rem 0;

  background-color: ${ColorLightSlate2};
  border-radius: 0.8rem;
`;

export const CouponBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1.6rem;
  margin-top: 2rem;

  border-radius: 0.8rem;
  border: 1px solid ${ColorLightSlate7};

  background-color: ${ColorLightSlate2};
`;

export const PaymentMethodSection = styled.div`
  margin-top: 2rem;

  display: flex;
  column-gap: 1.2rem;
`;

export const PaymentBtn = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1.2rem 1.6rem;

  border-radius: 0.6rem;

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${ColorLightEltern3};
          border: 1px solid ${ColorLightEltern7};
        `
      : css`
          background-color: ${ColorLight1};
          border: 1px solid ${ColorLightBlack4};
        `}
`;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 2.5rem;
`;

export const DiscountSection = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
`;

export const TotalPriceSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.2rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
`;

export const CouponModalWrapper = styled.div`
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;
