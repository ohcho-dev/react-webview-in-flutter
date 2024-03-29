import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import LayoutMainPage from "../../../layouts/LayoutMainPage";
import UseImgix from "../../../components/common/Imgix";
import CoachingCard from "../../../components/domain/coaching/coachingPage/CoachingCard";
import NoAppliedCoaching from "../../../components/domain/coaching/coachingPage/NoAppliedCoaching";
import { AppliedCoachingType } from "../../../types/apis/program";
import { commonCodeState, selectedChildInfoState } from "../../../store/common";
import * as S from "./coaching.styled";

import useAppliedCoachingList from "../../../queries/domain/coaching/useAppliedCoachingList";
import { Divider } from "components/domain/program/programListPage/programListPage.styled";

export type MenuType = "ongoing" | "all" | "end";

const CoachingPage = () => {
  const navigate = useNavigate();
  const commonCode = useRecoilValue<{ [key: string]: any }>(commonCodeState);
  const [selectedMenu, setSelectedMenu] = useState<MenuType>("all");
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [coachingList, setCoachingList] = useState<AppliedCoachingType[]>([]);
  const [ongoingList, setOngoingList] = useState<AppliedCoachingType[]>([]);
  const [endList, setEndList] = useState<AppliedCoachingType[]>([]);
  const { id } = useRecoilValue(selectedChildInfoState);
  const { data: appliedCoachingList } = useAppliedCoachingList(id, setSelectedMenu);

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
    let newList: AppliedCoachingType[] = [];

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
      const ongoingArr: AppliedCoachingType[] = appliedCoachingList.data
        .filter((coaching: AppliedCoachingType) => coaching.status === "COSTAT_ONGOING")
        .sort((a: AppliedCoachingType, b: AppliedCoachingType): number => {
          return new Date(b.end_date).getTime() - new Date(a.end_date).getTime();
        });

      const endArr: AppliedCoachingType[] = appliedCoachingList.data
        .filter((coaching: AppliedCoachingType) => coaching.status === "COSTAT_END")
        .sort((a: AppliedCoachingType, b: AppliedCoachingType): number => {
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
      <S.CoachingTabWrapper>
        {appliedCoachingList.data.length ? (
          <>
            <S.ChipWrapper>
              <S.ProgressChip
                isSelected={selectedMenu === "all"}
                onClick={() => setSelectedMenu("all")}
              >
                전체
              </S.ProgressChip>
              <S.ProgressChip
                isSelected={selectedMenu === "ongoing"}
                onClick={() => setSelectedMenu("ongoing")}
              >
                {commonCode["COSTAT_ONGOING"]}
              </S.ProgressChip>
              <S.ProgressChip
                isSelected={selectedMenu === "end"}
                onClick={() => setSelectedMenu("end")}
              >
                {commonCode["COSTAT_END"]}
              </S.ProgressChip>
            </S.ChipWrapper>
            {!coachingList.length && selectedMenu === "end" && <NoAppliedCoaching />}
            {!coachingList.length && selectedMenu === "ongoing" && <NoAppliedCoaching />}
            {coachingList.length > 0 &&
              coachingList
                .slice(0, lastIndex)
                .map((coaching: AppliedCoachingType, index: number) => (
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
      </S.CoachingTabWrapper>
      {lastIndex < coachingList.length - 1 && (
        <S.MoreBtn onClick={handleMoreBtnClick}>
          더 보기 <UseImgix alt="arrow-down" srcUrl="/images/icon-arrow-down.svg" />
        </S.MoreBtn>
      )}
    </LayoutMainPage>
  );
};

export default CoachingPage;
