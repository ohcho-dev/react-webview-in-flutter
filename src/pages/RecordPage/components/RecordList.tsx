import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import RecordListItem from "./RecordListItem";
import NoListRecord from "./NoListRecord";

export type MenuType = "all" | "practice" | "daily" | "play";

const CoachingTabWrapper = styled.div`
  padding: 1.6rem 0;
`;

const ProgressChip = styled.div`
  border-radius: 2rem;
  padding: 0.6rem 1.2rem;

  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;

  color: ${(props: { isSelected: boolean }) => (props.isSelected ? "#FFFFFF" : "#7E868C")};
  background-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "#090C0E" : "#F1F3F5"};
`;

const ChipWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
  padding: 0 2rem;
`;

const MoreBtn = styled.div`
  width: 100%;
  height: 5.85rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 0.05rem solid rgba(0, 0, 0, 0.15);

  font-weight: 400;
  font-size: 1.8rem;

  color: rgba(0, 0, 0, 0.8);

  img {
    margin-left: 1rem;
  }
`;

const Empty2 = styled.div`
  height: 2rem;
`;

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
      <CoachingTabWrapper>
        <ChipWrapper>
          <ProgressChip isSelected={selectedMenu === "all"} onClick={() => setSelectedMenu("all")}>
            전체
          </ProgressChip>
          <ProgressChip
            isSelected={selectedMenu === "practice"}
            onClick={() => setSelectedMenu("practice")}
          >
            발달연습
          </ProgressChip>
          <ProgressChip
            isSelected={selectedMenu === "daily"}
            onClick={() => setSelectedMenu("daily")}
          >
            일상
          </ProgressChip>
          <ProgressChip
            isSelected={selectedMenu === "play"}
            onClick={() => setSelectedMenu("play")}
          >
            놀이
          </ProgressChip>
        </ChipWrapper>
        <Empty2 />
        {/* 리스트 있을 때 / 없을 때 */}
        <RecordListItem />
        <NoListRecord />
      </CoachingTabWrapper>
    </>
  );
};

export default RecordList;
