import { ContentHeader } from "components/domain/coaching/newCoachingPage/ContentHeader";
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
import Text from "components/common/Text";
import usePlayTip from "queries/domain/coaching/usePlayTip";
import { PlayTipType } from "types/apis/coaching";
import usePlayContentsList from "queries/domain/coaching/usePlayContentsList";
import { getDateTimeMeridiem } from "utils/date/getDateTime";

const ContentListPage = () => {
  const { data: playTipData } = usePlayTip();
  const { data: playContentsData } = usePlayContentsList("286");

  return (
    <LayoutDetailPage>
      {playContentsData && <ContentHeader type="LIST" data={playContentsData} />}
      <S.PeriodInfoWrap>
        <S.PeriodInfoCard>
          <S.PeriodInfoItem>
            <Text variant={TextSm1420Regular} color={ColorLightEltern9Base}>
              {`다음 주차는 ${getDateTimeMeridiem(
                playContentsData?.next_opened_at || "",
              )}에 오픈됩니다.`}
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
      {playTipData.map((item: PlayTipType) => (
        <ContentAccordionTip key={item.id + item.title} title={item.title}>
          <Text variant={ContentsBase1626Regular} color={ColorLightBlack7}>
            {item.content}
          </Text>
        </ContentAccordionTip>
      ))}
    </LayoutDetailPage>
  );
};

export default ContentListPage;
