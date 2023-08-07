import { ContentHeader } from "components/domain/coaching/newCoachingPage/ContentHeader";
import ContentPlayList from "components/domain/coaching/newCoachingPage/ContentPlayList";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import * as S from "./ContentListPage.styled";
import EmptyBox from "components/common/EmptyBox";
import {
  ColorLight1,
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightEltern9Base,
  ColorLightSlate2,
  ContentsBase1626Regular,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import ContentAccordionTip from "components/domain/coaching/newCoachingPage/ContentAccordionTip";
import { useRecoilState } from "recoil";
import { contentCarouselSlideNumberState } from "store/domain/coaching";
import Text from "components/common/Text";

export interface SlickDataProps {
  id: number;
  img: string;
  category: string;
  title: string;
  desc: string;
}

const CAROUSEL_DATA: SlickDataProps[] = [
  {
    id: 0,
    img: "",
    category: "언어",
    title: "title title title title title title title ",
    desc: "desc title title title title title title title title title title ",
  },
  { id: 1, img: "", category: "언어", title: "title", desc: "desc" },
  { id: 2, img: "", category: "언어", title: "title", desc: "desc" },
];

const PLAY_TIP_DATA = [
  {
    id: 0,
    title: "앱을 사용해 대출할 경우 별도로 수수료를 내야 하나요?",
    content:
      "홈 화면 우측 상단에 있는 2개 프로필(개인, 사장님)을 누르면 ‘홈' 화면과 ‘사장님 홈’ 화면을전환하실 수 있습니다. 해당 기능은 1.2 버전 앱부터 사용하실 수 있습니다.",
  },
  {
    id: 1,
    title: "앱을 사용해 대출할 경우 별도로 수수료를 내야 하나요?",
    content:
      "홈 화면 우측 상단에 있는 2개 프로필(개인, 사장님)을 누르면 ‘홈' 화면과 ‘사장님 홈’ 화면을전환하실 수 있습니다. 해당 기능은 1.2 버전 앱부터 사용하실 수 있습니다.",
  },
  {
    id: 2,
    title: "앱을 사용해 대출할 경우 별도로 수수료를 내야 하나요?",
    content:
      "홈 화면 우측 상단에 있는 2개 프로필(개인, 사장님)을 누르면 ‘홈' 화면과 ‘사장님 홈’ 화면을전환하실 수 있습니다. 해당 기능은 1.2 버전 앱부터 사용하실 수 있습니다.",
  },
  {
    id: 3,
    title: "앱을 사용해 대출할 경우 별도로 수수료를 내야 하나요?",
    content:
      "홈 화면 우측 상단에 있는 2개 프로필(개인, 사장님)을 누르면 ‘홈' 화면과 ‘사장님 홈’ 화면을전환하실 수 있습니다. 해당 기능은 1.2 버전 앱부터 사용하실 수 있습니다.",
  },
];

const ContentListPage = () => {
  const [contentCarouselSlideNumber, setContentCarouselSlideNumber] = useRecoilState(
    contentCarouselSlideNumberState,
  );
  const CarouselSettings = {
    dots: true,
    infinite: false,
    className: "center",
    centerMode: true,
    slidesToShow: 1,
    speed: 500,
    appendDots: (dots: any) => <S.CustomDotsWrapper>{dots}</S.CustomDotsWrapper>,
    dotsClass: "dots_custom",
    swipeToSilde: true,
    initialSlide: contentCarouselSlideNumber,
    afterChange: (currentSlide: number) => setContentCarouselSlideNumber(currentSlide),
  };
  return (
    <LayoutDetailPage>
      <ContentHeader type="LIST" />
      <S.CarouselWrapper>
        <ContentPlayList settings={CarouselSettings} data={CAROUSEL_DATA} />
      </S.CarouselWrapper>
      <S.PeriodInfoWrap>
        <S.PeriodInfoCard>
          <S.PeriodInfoItem>
            <Text variant={TextSm1420Regular} color={ColorLightEltern9Base}>
              다음 주차는 23년 3월 30일 오전 9시에 오픈됩니다.
            </Text>
          </S.PeriodInfoItem>
          <S.PeriodInfoItem>
            <Text variant={TextSm1420Regular} color={ColorLightEltern9Base}>
              모든 놀이는 종료일까지만 이용하실 수 있습니다.
            </Text>
          </S.PeriodInfoItem>
        </S.PeriodInfoCard>
      </S.PeriodInfoWrap>
      <EmptyBox height="1rem" backgroundColor={ColorLightSlate2} />
      <S.TipSection>
        <EmptyBox height="2.8rem" backgroundColor={ColorLight1} />
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          놀이 활동 Tip!
        </Text>
        <EmptyBox height="0.4rem" backgroundColor={ColorLight1} />
      </S.TipSection>
      {PLAY_TIP_DATA.map(item => (
        <ContentAccordionTip key={item.id} title={item.title}>
          <Text variant={ContentsBase1626Regular} color={ColorLightBlack7}>
            {item.content}
          </Text>
        </ContentAccordionTip>
      ))}
    </LayoutDetailPage>
  );
};

export default ContentListPage;
