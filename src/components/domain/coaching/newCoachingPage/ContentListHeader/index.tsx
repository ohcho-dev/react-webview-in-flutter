import EmptyBox from "components/common/EmptyBox";
import * as S from "./ContentListHeader.styled";
import { ColorLight1 } from "lds-common/src/constants/tokens/global";
import { useEffect, useState } from "react";

interface TabMenuProps {
  name: string;
  id: number;
  status?: number;
}

interface ContentListHeaderProps {}

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

export const ContentListHeader = ({}: ContentListHeaderProps) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const handleSelectWeek = (item: TabMenuProps) => {
    return setSelectedWeek(item.id);
  };

  return (
    <S.HeaderWrap>
      <S.HeaderName>컨텐츠 리스트 이름</S.HeaderName>
      <S.HeaderStatusWrap>
        <S.HeaderStatusValue>진행중</S.HeaderStatusValue>
        <S.HeaderDateValue>2023.04.03~2023.05.29</S.HeaderDateValue>
      </S.HeaderStatusWrap>
      <EmptyBox height="2rem" backgroundColor={ColorLight1} />

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
              {item.name}
            </S.WeekItem>
          );
        })}
      </S.WeekTab>
    </S.HeaderWrap>
  );
};
