import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getAppliedCoachingInfo } from "../../api/coachingApi";
import CustomModal from "../../components/common/CustomModal";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { currentTaskIdState, selectedChildInfoState } from "../../recoil/atom";
import { NativeFunction } from "../../utils/NativeFunction";
import { getDate } from "../../utils/getDateTime";
import { CoachingStatusType, TaskStatusType } from "../../utils/type";
import ContentItem from "./components/ContentItem";

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
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: rgba(0, 0, 0, 0.3);
  }

  span:nth-child(3) {
    margin-left: 0.5rem;
    font-weight: 400;
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
  color: ${(props: { color: string }) => props.color};
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
  const { data: coachingInfo } = useQuery(queryKeys.appliedCoachingInfo, () =>
    getAppliedCoachingInfo(id),
  );
  const childInfo = useRecoilValue(selectedChildInfoState);
  const setCurrentTaskId = useSetRecoilState(currentTaskIdState);
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    id && setCurrentTaskId(id);
  }, [id]);

  useEffect(() => {
    // 과제 상테값 체크
    const taskStatus = coachingInfo.task.find((item: any) => item.status !== "TSST_COMPLETE");

    // 과제 미완성 + 기한 만료일때 modal
    if (taskStatus && coachingInfo.status === "COSTAT_END") {
      setModalTitle("이용기간이 종료되었습니다.");
      setModalContent("고객센터로 문의하여 주세요.");
      return;
    }

    // 과제 미완성 그 외
    if (taskStatus) {
      setModalTitle("과제를 먼저 끝내주세요!");
      setModalContent("주어진 과제를 완료해야 결과지를 확인할 수 있어요.");
    } else {
      setModalTitle("결과지를 작성 중입니다!");
      setModalContent("과제를 확인하여 결과지를 작성 중입니다. 잠시만 기다려주세요.");
    }
  }, [coachingInfo]);
  return (
    <>
      <PageTitleWrap>
        <Title>{coachingInfo.name}</Title>
        <ProgramStatus>
          <ProceedStatus color={coachingInfo.date_remain >= 0 ? "#00c7b1" : "#8D8D8D"}>
            {coachingInfo.date_remain >= 0 ? "진행중" : "종료"}
          </ProceedStatus>
          <span>~{getDate(coachingInfo.end_date)}</span>
          <span>
            {coachingInfo.date_remain > 0 && coachingInfo.date_remain + "일 남음"}
            {coachingInfo.date_remain === 0 && "오늘까지!"}
          </span>
        </ProgramStatus>
      </PageTitleWrap>
      <ShadowBox />
      <LayoutDetailPage
        style={{ marginTop: "10rem", height: "calc(100vh - 6rem - 10rem)" }}
        handleBackBtnClick={() => navigate("/coaching")}
      >
        <DetailTitle>⛳️ 결과지</DetailTitle>
        {coachingInfo.result_paper.map((paper: CoachingStatusType, index: number) => (
          <ContentItem
            style={{ marginBottom: "0" }}
            key={index + paper.name}
            coachingMethod="result"
            chipStatus={[paper.status]}
            name={paper.name}
            useArrowBtn={true}
            handleClick={() => {
              // 기간 및 과제 완성과 별개로 결과지가 발행되면 페이지 링크
              if (paper.status === "TTPST_COMPLETE") {
                navigate(`/coaching/result/${paper.paper_url}`);
              } else {
                setOpenModal(true);
              }
            }}
          />
        ))}
        <DetailTitle>✅ 과제</DetailTitle>
        {coachingInfo.task.map((task: TaskStatusType, index: number) => (
          <ContentItem
            key={index + task.name}
            coachingMethod={task.task_type}
            chipStatus={
              coachingInfo.date_remain < 0 && task.status === "TSST_ONGOING"
                ? [task.task_type, "EXPIRED"]
                : [task.task_type, task.status]
            }
            name={task.name}
            useArrowBtn={
              coachingInfo.date_remain < 0 && task.status === "TSST_ONGOING" ? false : true
            }
            handleClick={() => {
              if (task.task_type === "TSTY_SURVEY") {
                if (task.status === "TSST_ONGOING") {
                  coachingInfo.date_remain >= 0 &&
                    navigate(`/coaching/questionnarie/${task.id}`, { state: { coachingId: id } });
                } else if (task.status === "TSST_COMPLETE") {
                  navigate(`/coaching/questionnarie/detail/${task.id}`);
                }
              } else if (task.task_type === "TSTY_VIDEO") {
                if (task.status === "TSST_ONGOING") {
                  coachingInfo.date_remain >= 0 &&
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
        <CustomModal
          cancelbtn={false}
          topImage={
            <img src={"/images/icon-sad-circle.svg"} alt="character" style={{ width: "9.5rem" }} />
          }
          title={modalTitle}
          content={modalContent}
          isOpen={openModal}
          toggleModal={() => setOpenModal(!openModal)}
          okBtnName="확인"
          okBtnClick={() => setOpenModal(!openModal)}
        />
      </LayoutDetailPage>
    </>
  );
};

export default CoachingDetailPage;
