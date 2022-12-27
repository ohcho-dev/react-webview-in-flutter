import { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import { Divider } from "../ProgramPage/components/styled";
import CoachingCard from "./components/CoachingCard";
import NoAppliedCoaching from "./components/NoAppliedCoaching";

type MenuType = "ongoing" | "all" | "end";

const CoachingTabWrapper = styled.div`
  padding: 2rem;
`;

const ProgressChip = styled.div`
  width: 5.3rem;
  height: 3.2rem;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;

  color: ${(props: { isSelected: boolean }) => (props.isSelected ? "#FFFFFF" : "black")};
  background-color: ${(props: { isSelected: boolean }) => (props.isSelected ? "black" : "#F0F0F0")};
`;

const ChipWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
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
const data = [
  { onGoing: true },
  { onGoing: false },
  { onGoing: false },
  { onGoing: true },
  { onGoing: true },
  { onGoing: true },
  { onGoing: true },
  { onGoing: true },
  { onGoing: true },
  { onGoing: false },
];
const CoachingPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>("all");
  // TODO: lastIndex 초기값은 coachingList.length
  const [lastIndex, setLastIndex] = useState<number>(5);
  // TODO: 구매 상품 있을때
  // 1. 진행중 > 종료
  // 2. 진행중: 종료일이 많이 남은 순
  // 3. 종료: 종료일이 최신순

  // TODO: api로 리스트 받아오면 coachingList 지역상태 저장
  const [coachingList, setCoachingList] = useState(data);
  const handleCardClick = () => {
    alert("click!");
  };

  const handleMoreBtnClick = () => {
    let index = lastIndex;
    if (lastIndex + 5 > coachingList.length) {
      index = index + (coachingList.length - lastIndex);
    } else {
      index += 5;
    }

    setLastIndex(index);
  };

  useEffect(() => {
    let newList: { onGoing: boolean }[] = [];

    if (selectedMenu === "end") {
      newList = data.filter(coaching => !coaching.onGoing);
    } else if (selectedMenu === "ongoing") {
      newList = data.filter(coaching => coaching.onGoing);
    } else if (selectedMenu === "all") {
      newList = data;
    }

    setCoachingList(newList);
    setLastIndex(newList.length > 5 ? 5 : newList.length);
  }, [selectedMenu]);
  return (
    <LayoutMainPage>
      <CoachingTabWrapper>
        {/* <NoAppliedCoaching /> */}
        <ChipWrapper>
          <ProgressChip isSelected={selectedMenu === "all"} onClick={() => setSelectedMenu("all")}>
            전체
          </ProgressChip>
          <ProgressChip
            isSelected={selectedMenu === "ongoing"}
            onClick={() => setSelectedMenu("ongoing")}
          >
            진행중
          </ProgressChip>
          <ProgressChip isSelected={selectedMenu === "end"} onClick={() => setSelectedMenu("end")}>
            종료
          </ProgressChip>
        </ChipWrapper>
        {coachingList.slice(0, lastIndex).map((coaching, index) => (
          <>
            <CoachingCard coaching={coaching} key={index} />
            {index !== lastIndex - 1 && <Divider style={{ margin: "2rem 0" }} />}
          </>
        ))}
      </CoachingTabWrapper>
      {lastIndex < coachingList.length - 1 && (
        <MoreBtn onClick={handleMoreBtnClick}>
          더 보기 <img alt="arrow-down" src="/images/icon-arrow-down.svg" />
        </MoreBtn>
      )}
    </LayoutMainPage>
  );
};

export default CoachingPage;
