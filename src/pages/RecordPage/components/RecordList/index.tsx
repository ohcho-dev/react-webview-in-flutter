import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import * as S from "./RecordList.styled";
import RecordListItem from "../RecordListItem";
import NoListRecord from "../NoListRecord";
import EmptyBox from "../../../../components/common/EmptyBox";

export type MenuType = "all" | "practice" | "daily" | "play";

// TODO: 1.코칭 리스트에서 진행중 선택 > 코칭 상세 페이지로 이동 > 상세 페이지 상단의 뒤로가기 선택 > 다시 코칭 리스트로 돌아왔을 때 : 진행중
// 2. 코칭 리스트에서 진행중 선택 > 하단 다른 메뉴 선택하여 메뉴 이동 > 하단 메뉴 선택하여 코칭 리스트로 돌아왔을 때 : 기본 전체
// 공수 많이 들어가면 디폴트 '전체'
const RecordList = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState<MenuType>("all");
  const [lastIndex, setLastIndex] = useState<number>(0);

  const handleCardClick = (id: number) => {
    navigate(`/coaching/coaching-detail/${id}`);
  };

  return (
    <>
      <S.CoachingTabWrapper>
        <S.ChipWrapper>
          <S.ProgressChip
            isSelected={selectedMenu === "all"}
            onClick={() => setSelectedMenu("all")}
          >
            전체
          </S.ProgressChip>
          <S.ProgressChip
            isSelected={selectedMenu === "practice"}
            onClick={() => setSelectedMenu("practice")}
          >
            발달연습
          </S.ProgressChip>
          <S.ProgressChip
            isSelected={selectedMenu === "daily"}
            onClick={() => setSelectedMenu("daily")}
          >
            일상
          </S.ProgressChip>
          <S.ProgressChip
            isSelected={selectedMenu === "play"}
            onClick={() => setSelectedMenu("play")}
          >
            놀이
          </S.ProgressChip>
        </S.ChipWrapper>
        <EmptyBox height="2rem" />
        {/* 리스트 있을 때 / 없을 때 */}
        <RecordListItem />
        <NoListRecord />
      </S.CoachingTabWrapper>
    </>
  );
};

export default RecordList;
