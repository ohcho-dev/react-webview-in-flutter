import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { queryKeys } from "../../../constants/queryKeys";
import { selectedChildInfoState, selectedHomeDataState } from "../../../recoil/atom";
import Dday from "../../../utils/Dday";
import UseImgix from "../../../utils/UseImgix";
import { NativeFunction } from "../../../utils/NativeFunction";

const Wrap = styled.div`
  padding: 2.5rem 0;
`;

const GreyBox = styled.div`
  background: #f6f6f6;
  border-radius: 1.2rem;
  padding: ${(prop: { padding?: string }) => prop.padding || "2rem"};
  margin: 0 2rem;
  margin-bottom: ${(prop: { padding?: string; marginBottom?: string }) =>
    prop.marginBottom || "1.2rem"};

  &:last-child {
    margin-bottom: 0;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const Label = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-left: 0.7rem;
`;

const DDay = styled.span`
  font-weight: 800;
  font-size: 2.6rem;
  line-height: 3.1rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-top: -0.2rem;
`;

const DDayLabel = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-left: 0.4rem;
`;

const NoticeTitle = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 1.6rem;
`;

const NoticeDesc = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);

  div {
    margin-bottom: 1.2rem;
    display: flex;
    align-items: flex-start;

    &:last-child {
      margin-bottom: 0.5rem;
    }
  }
`;

const ListStyle = styled.span`
  display: inline-block;
  min-width: 0.6rem;
  min-height: 0.6rem;
  margin-top: 0.6rem;
  border-radius: 0.3rem;
  background-color: ${(prop: { i: number }) => listStyle[prop.i % 5]};
  margin-right: 0.8rem;
`;

const ActivityWrap = styled.div`
  padding: 3.5rem 0 0;
`;

const ActivityTitle = styled.div`
  padding: 0 2rem 1.8rem;

  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-left: 0.4rem;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #000000;
  }
`;

const ActivityContent = styled.div`
  padding: 0 2rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &::-webkit-scrollbar-thumb {
    display: none; /* Chrome, Safari, Opera*/
  }

  img {
    width: 100%;
  }
`;

const ItemWrap = styled.div`
  display: inline-block;
  width: 22rem;
  margin-right: 1.2rem;

  &:last-child {
    margin-right: 0;
  }

  img {
    border-radius: 0.8rem;
    border: solid 1px #efefef;
  }
`;

const ImageWrap = styled.img`
  width: 22rem;
  height: 14rem;
  border-radius: 0.8rem;
  border: solid 1px #efefef;
  object-fit: cover;
`;

const ItemTitle = styled.div`
  margin-top: 1.3rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const listStyle = ["#00C7B1", "#9380FF", "#78B9FF", "#FF9999", "#5AC4B1"];

const RecommendActivityBox = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const selectedChild = useRecoilValue(selectedChildInfoState);
  const homeData = useRecoilValue(selectedHomeDataState);

  useEffect(() => {
    queryClient.invalidateQueries(queryKeys.homeData);
  }, [selectedChild.id]);

  return (
    <Wrap>
      <GreyBox padding="2rem 2rem 2rem 1.3rem">
        <FlexBox>
          <FlexBox>
            <UseImgix srcUrl="/images/icon-home-child.svg" alt="우리 아이 태어난지" />
            <Label>우리 아이 태어난지</Label>
          </FlexBox>
          <FlexBox>
            <DDay>{selectedChild.birth_date && Math.abs(Dday(selectedChild.birth_date)) + 1}</DDay>
            <DDayLabel>일째</DDayLabel>
          </FlexBox>
        </FlexBox>
      </GreyBox>
      {homeData.month_level_info[0] && (
        <GreyBox marginBottom="0">
          <NoticeTitle>이 시기 발달정보</NoticeTitle>
          <NoticeDesc>
            {homeData.month_level_info.map((item, key) => (
              <div key={key}>
                <ListStyle i={key}></ListStyle>
                <span>{item}</span>
              </div>
            ))}
          </NoticeDesc>
        </GreyBox>
      )}
      <ActivityWrap>
        {homeData.month_level_content.length > 0 && (
          <>
            <ActivityTitle>
              👍 <span>이 시기에 도움이 되는 활동</span>
            </ActivityTitle>
            <ActivityContent>
              <>
                {homeData.month_level_content.map((item: any) => (
                  <ItemWrap
                    key={item.id}
                    onClick={() =>
                      item.url.indexOf("notion") === -1
                        ? NativeFunction("routeNativeScreen", `childRecommend@${item.url}`)
                        : navigate("/home/activity", { state: item.url })
                    }
                  >
                    {item.image ? (
                      <ImageWrap
                        src={item.image}
                        loading="lazy"
                        alt="recommended activity thumbnail"
                      />
                    ) : (
                      "이미지가 없어요.."
                    )}
                    <ItemTitle>{item.subject}</ItemTitle>
                  </ItemWrap>
                ))}
              </>
            </ActivityContent>
          </>
        )}
      </ActivityWrap>
    </Wrap>
  );
};

export default RecommendActivityBox;
