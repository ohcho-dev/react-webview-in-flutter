import EmptyBox from "components/common/EmptyBox";
import { ContentHeader } from "components/domain/coaching/newCoachingPage/ContentHeader";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import {
  ColorLight1,
  ColorLightBlack6,
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightSlate2,
  ContentsBase1626Regular,
  TextLg1826Semibold,
  TextSm1420Bold,
} from "lds-common/src/constants/tokens/global";
import { useParams } from "react-router-dom";
import * as S from "./ContentDetailPage.styled";
import { useState } from "react";
import Text from "components/common/Text";
import ActivityLevelSwitch from "components/domain/coaching/newCoachingPage/ActivityLevelSwitch";

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
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <LayoutDetailPage>
      <EmptyBox height="0.8rem" backgroundColor={ColorLight1} />
      <ContentHeader type="DETAIL" />
      <div style={{ height: "500px", background: "#efefef" }}>rich editor area</div>
      <EmptyBox height="2.4rem" backgroundColor={ColorLight1} />
      <EmptyBox height="1rem" backgroundColor={ColorLightSlate2} />
      <EmptyBox height="3.2rem" backgroundColor={ColorLight1} />
      <S.ActivityWrapper>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          우리 아이를 위한 확장 활동
        </Text>

        <EmptyBox height="1.2rem" backgroundColor={ColorLight1} />
        <ActivityLevelSwitch toggle={toggle} handleToggle={() => setToggle(prev => !prev)} />

        <S.ActivityList>
          {LIST_ITEM.map(item => (
            <div key={item.id + item.content}>
              <S.ActivityItemIndex>
                <Text variant={TextSm1420Bold} color={ColorLightBlack6}>
                  {item.id.toString()}
                </Text>
              </S.ActivityItemIndex>
              <S.ActivityItem>
                <Text variant={ContentsBase1626Regular} color={ColorLightBlack7}>
                  {item.content}
                </Text>
              </S.ActivityItem>
            </div>
          ))}
        </S.ActivityList>
      </S.ActivityWrapper>
    </LayoutDetailPage>
  );
};

export default ContentDetailPage;
