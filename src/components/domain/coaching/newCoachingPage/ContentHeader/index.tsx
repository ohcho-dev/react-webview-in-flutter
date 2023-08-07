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
import { useState } from "react";

import GrowthChip from "components/common/GrowthChip";
import Text from "components/common/Text";
import ProgressStatusBadge from "components/common/ProgressStatusBadge";

interface TabMenuProps {
  name: string;
  id: number;
  status?: number;
}

interface ContentHeaderProps {
  type: "LIST" | "DETAIL";
}

const TAB_MENU = [
  { name: "1주차", id: 1, status: 0 },
  { name: "2주차", id: 2, status: 0 },
  { name: "3주차", id: 3, status: 0 },
  { name: "4주차", id: 4, status: 1 },
  { name: "5주차", id: 5, status: 1 },
  { name: "6주차", id: 6, status: 1 },
  { name: "7주차", id: 7, status: 1 },
  { name: "8주차", id: 8, status: 1 },
  { name: "9주차", id: 9, status: 1 },
  { name: "10주차", id: 10, status: 1 },
  { name: "11주차", id: 11, status: 1 },
  { name: "12주차", id: 12, status: 1 },
];

export const ContentHeader = ({ type }: ContentHeaderProps) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const handleSelectWeek = (item: TabMenuProps) => {
    return setSelectedWeek(item.id);
  };

  return (
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
                2023.04.03~2023.05.29
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
          {TAB_MENU.map(item => {
            console.log(item);
            return (
              <S.WeekItem
                key={item.id}
                isOpen={item.status === 0}
                isSelected={selectedWeek === item.id}
                onClick={() => handleSelectWeek(item)}
              >
                <Text
                  variant={TextLg1826Semibold}
                  color={item.status === 0 ? ColorLightBlack9Base : ColorLightSlate9Base}
                >
                  {item.name}
                </Text>
              </S.WeekItem>
            );
          })}
        </S.WeekTab>
      )}
    </S.HeaderWrap>
  );
};
