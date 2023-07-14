import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import getDday from "../../../../utils/date/getDday";
import UseImgix from "../../../../components/common/Imgix";
import { NativeFunction } from "../../../../utils/app/NativeFunction";
import { selectedChildInfoState, selectedHomeDataState } from "../../../../store/common";
import { homeQueryKeys } from "../../../../queries/domain/home/homeQueryKeys";
import * as S from "./RecommendActivityBox.styled";

const RecommendActivityBox = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const selectedChild = useRecoilValue(selectedChildInfoState);
  const homeData = useRecoilValue(selectedHomeDataState);

  useEffect(() => {
    queryClient.invalidateQueries(homeQueryKeys.homeData);
  }, [selectedChild.id]);

  return (
    <S.Wrap>
      <S.GreyBox padding="2rem 2rem 2rem 1.3rem">
        <S.FlexBox>
          <S.FlexBox>
            <UseImgix srcUrl="/images/icon-home-child.svg" alt="우리 아이 태어난지" />
            <S.Label>우리 아이 태어난지</S.Label>
          </S.FlexBox>
          <S.FlexBox>
            <S.DDay>
              {selectedChild.birth_date && Math.abs(getDday(selectedChild.birth_date)) + 1}
            </S.DDay>
            <S.DDayLabel>일째</S.DDayLabel>
          </S.FlexBox>
        </S.FlexBox>
      </S.GreyBox>
      {homeData.month_level_info[0] && (
        <S.GreyBox marginBottom="0">
          <S.NoticeTitle>이 시기 발달정보</S.NoticeTitle>
          <S.NoticeDesc>
            {homeData.month_level_info.map((item, key) => (
              <div key={key}>
                <S.ListStyle i={key}></S.ListStyle>
                <span>{item}</span>
              </div>
            ))}
          </S.NoticeDesc>
        </S.GreyBox>
      )}
      <S.ActivityWrap>
        {homeData.month_level_content.length > 0 && (
          <>
            <S.ActivityTitle>
              <UseImgix srcUrl={"/images/playy.svg"} />
              <span>이 시기에 도움이 되는 활동</span>
            </S.ActivityTitle>
            <S.ActivityContent>
              <>
                {homeData.month_level_content.map((item: any) => (
                  <S.ItemWrap
                    key={item.id}
                    onClick={() =>
                      item.url.indexOf("notion") === -1
                        ? NativeFunction("routeNativeScreen", `childRecommend@${item.url}`)
                        : navigate("/home/activity", { state: item.url })
                    }
                  >
                    {item.image ? (
                      <S.ImageWrap
                        src={item.image}
                        loading="lazy"
                        alt="recommended activity thumbnail"
                      />
                    ) : (
                      "이미지가 없어요.."
                    )}
                    <S.ItemTitle>{item.subject}</S.ItemTitle>
                  </S.ItemWrap>
                ))}
              </>
            </S.ActivityContent>
          </>
        )}
      </S.ActivityWrap>
    </S.Wrap>
  );
};

export default RecommendActivityBox;
