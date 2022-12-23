import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSelectedCoachingInfo } from "../../../api/programApi";
import { queryKeys } from "../../../constant/queryKeys";
import { getDiscountPercentage } from "../../../utils/getDiscountPercentage";
import { coachingType } from "../../../utils/type";
import ProgramPrice from "../../ProgramPage/components/ProgramPrice";

const DetailCoachingContainer = styled.div``;
const Thumbnail = styled.img`
  width: 37.5rem;
  height: 25rem;
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
  const { coachingid } = useParams();
  const [favorites, setFavorites] = useState(false);
  const { data } = useQuery(queryKeys.selectedCoacingInfo, () =>
    getSelectedCoachingInfo(coachingid),
  );
  const [coachingInfo, setCoachingInfo] = useState<coachingType>();

  useEffect(() => {
    if (data.length) {
      setCoachingInfo(data[0]);
    }
  }, [data]);
  return (
    <DetailCoachingContainer>
      <Thumbnail
        alt="thumnail"
        src={coachingInfo?.main_image ? coachingInfo?.main_image : "/images/icon-sparkle.svg"}
      />{" "}
      :
      <ProductMainInfo>
        <ProductName>{coachingInfo?.name}</ProductName>
        <PriceWrap>
          <ProgramPrice
            discountPercentage={getDiscountPercentage(
              coachingInfo?.base_price,
              coachingInfo?.price,
            )}
            originalPrice={coachingInfo?.base_price}
            price={coachingInfo?.price ? coachingInfo.price : 0}
          />
        </PriceWrap>

        {/* 즐겨찾기 : 아직 기능 구현 안됐습니다 */}
        <Favorites onClick={() => setFavorites(!favorites)}>
          <img
            src={favorites ? "/images/icon-favorites-on.svg" : "/images/icon-favorites-off.svg"}
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
