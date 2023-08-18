import { useNavigate, useParams } from "react-router-dom";
import ContentCarousel from "components/common/ContentCarousel";
import * as S from "./ContentPlayList.styled";
import Text from "components/common/Text";
import {
  ColorLightBlack6,
  ColorLightBlack7,
  ColorLightBlack9Base,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import GrowthChip from "components/common/GrowthChip";
import UseImgix from "components/common/Imgix";
import EmptyBox from "components/common/EmptyBox";
import { PlayContentsListWeeklyItemType } from "types/apis/coaching";
import { getDateTimeMeridiem } from "utils/date/getDateTime";

interface ContentPlayListProps {
  settings: object;
  data: PlayContentsListWeeklyItemType[];
  selectedWeek: number; // 선택한 주차 (몇주차 Number를 array index로 사용하기 위해 부모컴포넌트에서 -1로 보냄)
}

const ContentPlayList = ({ settings, data, selectedWeek }: ContentPlayListProps) => {
  const { coachingId } = useParams();
  const navigate = useNavigate();

  return (
    <ContentCarousel settings={settings}>
      {data[selectedWeek].content_list.map(contentList => (
        <S.ContentWrapper
          key={contentList.id + contentList.title}
          onClick={() => {
            if (data[selectedWeek].is_opened)
              navigate(`/coaching/content/${coachingId}/${contentList.id}`);
          }}
        >
          <S.CardWrapper>
            <img
              src={contentList.image || ""}
              alt={contentList.id + contentList.title}
              style={{ width: "100%", height: "16rem", objectFit: "cover" }}
            />
            <GrowthChip label={contentList.growth_category_name} style={{ marginTop: "1.6rem" }} />
            <Text
              variant={TextLg1826Semibold}
              color={ColorLightBlack9Base}
              style={{ marginTop: "0.8rem" }}
              isEllipsis
            >
              {contentList.title}
            </Text>
            <Text variant={TextSm1420Regular} color={ColorLightBlack6} isEllipsis>
              {contentList.theme}
            </Text>

            {!data[selectedWeek].is_opened && (
              <S.CardBlur
                style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(5px)" }}
              >
                <UseImgix srcUrl="/images/icon-sad-circle.svg" />
                <EmptyBox height="1.2rem" />
                <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
                  아직 열리지 않은 콘텐츠예요.
                </Text>
                <EmptyBox height="0.8rem" />
                <Text
                  variant={TextSm1420Regular}
                  color={ColorLightBlack7}
                  style={{ wordBreak: "keep-all" }}
                >
                  {data[selectedWeek].week_index +
                    "주차 놀이는 " +
                    getDateTimeMeridiem(data[selectedWeek].open_at) +
                    "부터 확인하실 수 있어요."}
                </Text>
              </S.CardBlur>
            )}
          </S.CardWrapper>
        </S.ContentWrapper>
      ))}
    </ContentCarousel>
  );
};
export default ContentPlayList;
