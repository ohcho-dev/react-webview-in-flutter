import { useState } from 'react';
import styled from 'styled-components';
import ProgramPrice from '../../../components/ProgramPrice';

const DetailCoachingContainer = styled.div``;
const Thumbnail = styled.div`
  width: 100%;
  height: 25rem;
  background: url(/images/program-product-default.svg) 50% 50% no-repeat;
  background-size: cover;
`;

const ProductMainInfo = styled.div`
  position: relative;
  padding: 2.5rem 0;
  margin: 0 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const ProductName = styled.h1`
  margin: 0 0.5rem 1rem;

  font-weight: 500;
  font-size: 2rem;
  line-height: 2rem;
  color: #000000;
`;
const PriceWrap = styled.div`
  margin: 0 0.5rem;
`;
const Favorites = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
  width: 2.8rem;
`;

const ImageWrap = styled.div`
  width: 100%:
  margin: 0 auto;
`;

const DetailCoaching = () => {
  const [favorites, setFavorites] = useState(false);
  return (
    <DetailCoachingContainer>
      <Thumbnail />
      <ProductMainInfo>
        <ProductName>우리아이 양육 코칭</ProductName>
        <PriceWrap>
          <ProgramPrice discountPercentage={85} originalPrice={150000} price={29900} />
        </PriceWrap>

        {/* 즐겨찾기 : 아직 기능 구현 안됐습니다 */}
        <Favorites onClick={() => setFavorites(!favorites)}>
          <img
            src={favorites ? '/images/icon-favorites-on.svg' : '/images/icon-favorites-off.svg'}
            alt="즐겨찾기"
          />
        </Favorites>
      </ProductMainInfo>
      <ImageWrap>
        <img src="/images/program-product-detail-default.png" width="100%" />
      </ImageWrap>
    </DetailCoachingContainer>
  );
};

export default DetailCoaching;
