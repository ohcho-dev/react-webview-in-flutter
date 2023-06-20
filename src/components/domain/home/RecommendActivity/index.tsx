import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { NativeFunction } from "../../../../utils/app/NativeFunction";
import UseImgix from "../../../../components/common/Imgix";
import { selectedHomeDataState } from "../../../../store/common";
import * as S from "./RecommendActivity.styled";

const RecommendActivity = () => {
  const navigate = useNavigate();
  const homeData = useRecoilValue(selectedHomeDataState);

  return (
    <S.ActivityWrap>
      {homeData.month_level_content.length > 0 && (
        <>
          <S.ActivityTitle>
            👍 <span>이 시기에 도움이 되는 활동</span>
          </S.ActivityTitle>
          <S.ActivityContent>
            <>
              {homeData.month_level_content.map((item: any) => (
                <S.ItemWrap
                  key={item.id}
                  onClick={() => NativeFunction("routeNativeScreen", `childRecommend@${item.url}`)}
                >
                  {item.image ? <S.ImageWrap image={item.image} /> : "이미지가 없어요.."}
                  <S.ItemTitle>{item.subject}</S.ItemTitle>
                </S.ItemWrap>
              ))}
            </>
          </S.ActivityContent>
        </>
      )}
      <S.LinkBanner onClick={() => navigate("/program")}>
        <S.BannerTitle>우리 아이 잘 자라고 있는걸까?</S.BannerTitle>
        <S.BannerDesc>발달에 맞는 전문 코칭을 받아보세요.</S.BannerDesc>
        <UseImgix srcUrl="/images/banner-home.png" alt="프로그램 바로가기" />
      </S.LinkBanner>
    </S.ActivityWrap>
  );
};

export default RecommendActivity;
