import { ColorLightBlack6, ColorLightSlate2 } from "constants/ldsConstants/global";
import styled from "styled-components";

export const Thumbnail = styled.div`
  img:nth-child(1) {
    width: 37.5rem;
    height: 25rem;
  }
`;

export const ProductMainInfo = styled.div`
  position: relative;
  padding: 2.5rem 0;
  margin: 0 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const ProductDetailInfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

  img {
    width: 33.5rem;
    height: 17.5rem;
  }
`;

export const GreySquare = styled.div`
  width: 100%;
  height: 1rem;

  margin: 4rem 0;
  background-color: #f6f6f6;
`;

export const ProductName = styled.h1`
  margin: 0 0.5rem 1rem;

  font-weight: 500;
  font-size: 2rem;
  line-height: 2rem;
  color: #000000;
`;

export const PriceWrap = styled.div`
  margin: 0 0.5rem;
`;

export const ImageWrap = styled.div`
  img {
    width: 100%;
    margin: 0 auto;
  }
`;

export const TitleText = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.1rem;
  color: #000000;
  margin-bottom: 0.6rem;
`;

export const SubText = styled.h4`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-bottom: 3rem;
`;

export const ChildInfoWrap = styled.div`
  background: ${ColorLightSlate2};
  border-radius: 0.8rem;
  padding: 1.6rem;
  margin-bottom: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #000000;
`;

export const ProfileImageWrap = styled.div`
  margin-right: 0.8rem;
`;

export const ChildInfo = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-left: 0.2rem;
  color: ${ColorLightBlack6};
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
