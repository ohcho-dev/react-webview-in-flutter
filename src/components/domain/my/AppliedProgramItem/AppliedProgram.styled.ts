import NoMainImage from "components/domain/program/NoMainImage";
import { ColorLightSlate5 } from "constants/ldsConstants/global";
import styled from "styled-components";

export const ListWrap = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  &:last-child {
    border-bottom: none;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const PurchaseDate = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.3);
`;

export const PaymentCode = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: right;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.3);
`;

export const ListContent = styled.div`
  display: grid;
  grid-template-columns: auto 10rem;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 0.8rem;
`;

export const Price = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

export const ChildInfo = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.5);
`;

export const ThumbnailImg = styled.img`
  width: 8.5rem;
  height: 7rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const NoThumbnailImg = styled.div`
  width: 8.5rem;
  height: 7rem;
  border-radius: 0.5rem;

  background-color: ${ColorLightSlate5};
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const DateAndChipWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
`;
