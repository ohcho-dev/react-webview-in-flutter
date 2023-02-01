import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getAppliedCoachingInfo } from "../../api/coachingApi";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { selectedChildInfoState } from "../../recoil/atom";
import { NativeFunction } from "../../utils/NativeFunction";
import { CoachingStatusType, TaskStatusType } from "../../utils/type";
import ContentItem from "./components/ContentItem";
import ContentTitle from "./components/ContentTitle";

const PageTitleWrap = styled.div`
  position: fixed;
  top: 5.9rem;
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: solid 0.2rem #f5f5f5;
  padding: 2rem 2.5rem;
  z-index: 100;
`;

const ShadowBox = styled.div`
  position: fixed;
  top: 16.2rem;
  left: 0;
  width: 100%;
  height: 1px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #000000;
`;

const ProgramStatus = styled.div`
  margin-top: 0.8rem;

  span:nth-child(2) {
    margin-left: 0.5rem;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: rgba(0, 0, 0, 0.3);
  }

  span:nth-child(3) {
    margin-left: 0.5rem;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const ProceedStatus = styled.span`
  height: 2.4rem;
  background: #ffffff;
  border: 1px solid ${(props: { color: string }) => props.color};
  border-radius: 2rem;
  padding: 0.2rem 0.9rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #00c7b1;
`;

const DetailTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  display: flex;
  align-items: center;
  padding: 2.6rem 2rem 1.2rem;
`;
const CoachingDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: coachingInfo, refetch } = useQuery(queryKeys.appliedCoachingInfo, () =>
    getAppliedCoachingInfo(id),
  );
  const childInfo = useRecoilValue(selectedChildInfoState);

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id]);

  return (
    <>
      <PageTitleWrap>
        <Title>{coachingInfo.name}</Title>
        <ProgramStatus>
          <ProceedStatus color={"#00c7b1"}>{"진행중"}</ProceedStatus>
          <span>~{coachingInfo.end_date}</span>
          <span>{coachingInfo.date_remain}일 남음</span>
        </ProgramStatus>
      </PageTitleWrap>
      <ShadowBox />
      <LayoutDetailPage
        style={{ marginTop: "10rem", height: "calc(100vh - 6rem - 10rem)" }}
        handleBackBtnClick={() => navigate("/coaching")}
      >
        <DetailTitle>⛳️ 과제</DetailTitle>
        {coachingInfo.result_paper.map((paper: CoachingStatusType, index: number) => (
          <ContentItem
            style={{ marginBottom: "0" }}
            key={index + paper.name}
            coachingMethod="result"
            chipStatus={[paper.status]}
            name={paper.name}
            useArrowBtn={paper.status === "TTPST_COMPLETE"}
            handleClick={() => {
              if (paper.status === "TTPST_COMPLETE")
                navigate(`/coaching/result/${paper.paper_url}`);
            }}
          />
        ))}
        <DetailTitle>✅ 결과지</DetailTitle>
        {coachingInfo.task.map((task: TaskStatusType, index: number) => (
          <ContentItem
            key={index + task.name}
            coachingMethod={task.task_type}
            chipStatus={[task.task_type, task.status]}
            name={task.name}
            useArrowBtn={true}
            handleClick={() => {
              if (task.task_type === "TSTY_SURVEY") {
                if (task.status === "TSST_ONGOING") {
                  navigate(`/coaching/questionnarie/${task.id}`, { state: { coachingId: id } });
                } else if (task.status === "TSST_COMPLETE") {
                  navigate(`/coaching/questionnarie/detail/${task.id}`);
                }
              } else if (task.task_type === "TSTY_VIDEO") {
                if (task.status === "TSST_ONGOING") {
                  NativeFunction(
                    "routeNativeScreen",
                    `coachingVideoDetail@${task.id}@${childInfo.id}`,
                  );
                } else {
                  navigate(`/coaching/videoAssignment/${task.id}`, {
                    state: { task_id: task.id, coaching_id: id },
                  });
                }
              }
            }}
          />
        ))}
      </LayoutDetailPage>
    </>
  );
};

export default CoachingDetailPage;
