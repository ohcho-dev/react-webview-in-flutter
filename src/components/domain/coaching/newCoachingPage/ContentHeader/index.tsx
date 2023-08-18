import { useState } from "react";
import dayjs from "dayjs";
import { useSetRecoilState } from "recoil";

import GrowthChip from "components/common/GrowthChip";
import Text from "components/common/Text";
import ProgressStatusBadge from "components/common/ProgressStatusBadge";
import { PlayContentsListType } from "types/apis/coaching";
import ContentPlayList from "../ContentPlayList";
import { contentCarouselSlideNumberState } from "store/domain/coaching";
import EmptyBox from "components/common/EmptyBox";
import * as S from "./ContentHeader.styled";
import {
  ColorLight1,
  ColorLightBlack9Base,
  ColorLightSlate9Base,
  ContentsXxl2232Semibold,
  TextLg1826Semibold,
  TextXs1218Regular,
} from "lds-common/src/constants/tokens/global";

interface ContentHeaderProps {
  type: "LIST" | "DETAIL";
  data: PlayContentsListType;
}

export const ContentHeader = ({ type, data }: ContentHeaderProps) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const setContentCarouselSlideNumber = useSetRecoilState(contentCarouselSlideNumberState);

  const CarouselSettings = {
    dots: true,
    infinite: false,
    className: "center",
    centerMode: true,
    centerPadding: "30px 0",
    slidesToShow: 1,
    speed: 500,
    appendDots: (dots: any) => <S.CustomDotsWrapper>{dots}</S.CustomDotsWrapper>,
    dotsClass: "dots_custom",
    swipeToSilde: true,
    initialSlide: 0,
    afterChange: (currentSlide: number) => setContentCarouselSlideNumber(currentSlide),
  };

  const handleWeek = (week_index: number) => {
    setContentCarouselSlideNumber(0);
    setSelectedWeek(week_index);
  };

  return (
    <>
      <S.HeaderWrap>
        <EmptyBox height="0.8rem" backgroundColor={ColorLight1} />
        <S.HeaderInfoSection>
          <Text variant={ContentsXxl2232Semibold} color={ColorLightBlack9Base} isEllipsis>
            킥보드 타기
          </Text>
          <S.HeaderStatusWrap>
            {type === "LIST" && (
              <>
                <ProgressStatusBadge isFinished={false} />
                <Text variant={TextXs1218Regular} color={ColorLightSlate9Base}>
                  {dayjs(data.start_at).format("YYYY.MM.DD") +
                    "~" +
                    dayjs(data.end_at).format("YYYY.MM.DD")}
                </Text>
              </>
            )}
            {type === "DETAIL" && (
              <>
                <GrowthChip label="언어" style={{ minWidth: "fit-content" }} />
                <Text variant={TextXs1218Regular} color={ColorLightSlate9Base} isEllipsis>
                  균형 감각
                </Text>
              </>
            )}
          </S.HeaderStatusWrap>
        </S.HeaderInfoSection>
        <EmptyBox height="2rem" backgroundColor={ColorLight1} />

        {type === "LIST" && (
          <S.WeekTab>
            {data.weekly_list.map(item => (
              <S.WeekItem
                key={item.week_index + item.open_at}
                isOpen={item.is_opened}
                isSelected={selectedWeek === item.week_index}
                onClick={() => handleWeek(item.week_index)}
              >
                <Text
                  variant={TextLg1826Semibold}
                  color={item.is_opened ? ColorLightBlack9Base : ColorLightSlate9Base}
                >
                  {item.week_index + "주차"}
                </Text>
              </S.WeekItem>
            ))}
          </S.WeekTab>
        )}
      </S.HeaderWrap>

      {type === "LIST" && selectedWeek && (
        <S.CarouselWrapper>
          <ContentPlayList
            settings={CarouselSettings}
            data={data?.weekly_list}
            selectedWeek={selectedWeek - 1}
          />
        </S.CarouselWrapper>
      )}
    </>
  );
};
