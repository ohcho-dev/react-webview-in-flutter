import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getAppliedCoachingList } from "../../api/coachingApi";
import { queryKeys } from "../../constant/queryKeys";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import { commonCodeState, selectedChildInfoState } from "../../recoil/atom";
import { appliedCoachingType } from "../../utils/type";
import { Divider } from "../ProgramPage/components/styled";
import CoachingCard from "./components/CoachingCard";
import NoAppliedCoaching from "./components/NoAppliedCoaching";

export type MenuType = "ongoing" | "all" | "end";

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

// TODO: 1.코칭 리스트에서 진행중 선택 > 코칭 상세 페이지로 이동 > 상세 페이지 상단의 뒤로가기 선택 > 다시 코칭 리스트로 돌아왔을 때 : 진행중
// 2. 코칭 리스트에서 진행중 선택 > 하단 다른 메뉴 선택하여 메뉴 이동 > 하단 메뉴 선택하여 코칭 리스트로 돌아왔을 때 : 기본 전체
// 공수 많이 들어가면 디폴트 '전체'
const CoachingPage = () => {
  const navigate = useNavigate();
  const commonCode = useRecoilValue<{ [key: string]: any }>(commonCodeState);
  const [selectedMenu, setSelectedMenu] = useState<MenuType>("all");
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [coachingList, setCoachingList] = useState<appliedCoachingType[]>([]);
  const [ongoingList, setOngoingList] = useState<appliedCoachingType[]>([]);
  const [endList, setEndList] = useState<appliedCoachingType[]>([]);
  const { id } = useRecoilValue(selectedChildInfoState);
  const { data: appliedCoachingList, refetch } = useQuery(
    queryKeys.appliedCoachingList,
    getAppliedCoachingList,
    {
      onSuccess: () => {
        setSelectedMenu("all");
      },
    },
  );

  const handleCardClick = (id: number) => {
    navigate(`/coaching/coaching-detail/${id}`);
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
    if (id) {
      refetch();
    }
  }, [id]);

  useEffect(() => {
    let newList: appliedCoachingType[] = [];

    if (selectedMenu === "end") {
      newList = endList;
    } else if (selectedMenu === "ongoing") {
      newList = ongoingList;
    } else if (selectedMenu === "all") {
      newList = [...ongoingList, ...endList];
    }

    setCoachingList(newList);
    setLastIndex(newList.length > 5 ? 5 : newList.length);
  }, [selectedMenu]);

  useEffect(() => {
    // 구매 상품 있을때
    // 1. 진행중 > 종료
    // 2. 진행중: 종료일이 많이 남은 순
    // 3. 종료: 종료일이 최신순
    if (appliedCoachingList.data.length) {
      const ongoingArr: appliedCoachingType[] = appliedCoachingList.data
        .filter((coaching: appliedCoachingType) => coaching.status === "COSTAT_ONGOING")
        .sort((a: appliedCoachingType, b: appliedCoachingType): number => {
          return new Date(b.end_date).getTime() - new Date(a.end_date).getTime();
        });

      const endArr: appliedCoachingType[] = appliedCoachingList.data
        .filter((coaching: appliedCoachingType) => coaching.status === "COSTAT_END")
        .sort((a: appliedCoachingType, b: appliedCoachingType): number => {
          return new Date(b.end_date).getTime() - new Date(a.end_date).getTime();
        });

      setOngoingList(ongoingArr);
      setEndList(endArr);
      setCoachingList([...ongoingArr, ...endArr]);
      setLastIndex([...ongoingArr, ...endArr].length > 5 ? 5 : [...ongoingArr, ...endArr].length);
    }
  }, [appliedCoachingList]);

  return (
    <LayoutMainPage>
      <CoachingTabWrapper>
        {appliedCoachingList.data.length ? (
          <>
            <ChipWrapper>
              <ProgressChip
                isSelected={selectedMenu === "all"}
                onClick={() => setSelectedMenu("all")}
              >
                전체
              </ProgressChip>
              <ProgressChip
                isSelected={selectedMenu === "ongoing"}
                onClick={() => setSelectedMenu("ongoing")}
              >
                {commonCode["COSTAT_ONGOING"]}
              </ProgressChip>
              <ProgressChip
                isSelected={selectedMenu === "end"}
                onClick={() => setSelectedMenu("end")}
              >
                {commonCode["COSTAT_END"]}
              </ProgressChip>
            </ChipWrapper>
            {!coachingList.length && selectedMenu === "end" && (
              <NoAppliedCoaching selectedMenu="end" />
            )}
            {!coachingList.length && selectedMenu === "ongoing" && <NoAppliedCoaching />}
            {coachingList.length > 0 &&
              coachingList
                .slice(0, lastIndex)
                .map((coaching: appliedCoachingType, index: number) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleCardClick(coaching.id);
                    }}
                  >
                    <CoachingCard coaching={coaching} />
                    {index !== lastIndex - 1 && <Divider style={{ margin: "2rem 0" }} />}
                  </div>
                ))}
          </>
        ) : (
          <NoAppliedCoaching />
        )}
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
