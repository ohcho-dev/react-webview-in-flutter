import EmptyBox from "components/common/EmptyBox";
import { ContentHeader } from "components/domain/coaching/newCoachingPage/ContentHeader";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import { ColorLight1, ColorLightSlate2 } from "lds-common/src/constants/tokens/global";
import { useParams } from "react-router-dom";
import * as S from "./ContentDetailPage.styled";
import UseImgix from "components/common/Imgix";
import { useState } from "react";

const CATEGORY_BUTTON = [
  { id: 0, img: "/images/new-coaching/sprout.svg", title: "놀이를 어려워해요" },
  { id: 1, img: "/images/new-coaching/twingkle.svg", title: "능숙하게 잘해요" },
];

const LIST_ITEM = [
  { id: 1, content: "킥보드 타기가 능숙해졌다면 한 발로 서기 놀이를 해 보세요." },
  { id: 2, content: "킥보드 타기가 능숙해졌다면 한 발로 서기 놀이를 해 보세요." },
  { id: 3, content: "킥보드 타기가 능숙해졌다면 한 발로 서기 놀이를 해 보세요." },
  { id: 4, content: "킥보드 타기가 능숙해졌다면 한 발로 서기 놀이를 해 보세요." },
  { id: 5, content: "킥보드 타기가 능숙해졌다면 한 발로 서기 놀이를 해 보세요." },
];
const ContentDetailPage = () => {
  const { contentId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <LayoutDetailPage>
      <EmptyBox height="0.8rem" backgroundColor={ColorLight1} />
      <ContentHeader type="DETAIL" />
      <div style={{ height: "500px", background: "#efefef" }}>rich editor area</div>
      <EmptyBox height="2.4rem" backgroundColor={ColorLight1} />
      <EmptyBox height="1rem" backgroundColor={ColorLightSlate2} />
      <EmptyBox height="3.2rem" backgroundColor={ColorLight1} />
      <S.ActivityWrapper>
        <S.ActivityTitle>우리 아이를 위한 확장 활동</S.ActivityTitle>
        <S.ActivityCategoryWrapper>
          {CATEGORY_BUTTON.map(item => (
            <S.ActivityCategoryButton
              key={item.id}
              selected={selectedCategory === item.id}
              onClick={() => setSelectedCategory(item.id)}
            >
              <UseImgix srcUrl={item.img} />
              {item.title}
            </S.ActivityCategoryButton>
          ))}
        </S.ActivityCategoryWrapper>
        <S.ActivityList>
          {LIST_ITEM.map(item => (
            <div>
              <S.ActivityItemIndex>{item.id}</S.ActivityItemIndex>
              <S.ActivityItem key={item.id + item.content}>{item.content}</S.ActivityItem>
            </div>
          ))}
        </S.ActivityList>
      </S.ActivityWrapper>
    </LayoutDetailPage>
  );
};

export default ContentDetailPage;
