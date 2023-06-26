import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CustomModal from "../../../components/common/CustomModal";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { NativeFunction } from "../../../utils/app/NativeFunction";
import { getDate } from "../../../utils/date/getDateTime";
import ContentItem from "../../../components/domain/coaching/coachingDetailPage/ContentItem";
import UseImgix from "../../../components/common/Imgix";
import { CoachingStatusType, TaskStatusType } from "../../../types/domain/coaching";
import { selectedChildInfoState } from "../../../store/common";
import { currentTaskIdState } from "../../../store/domain/coaching";
import * as S from "./coachingDetail.styled";
import useAppliedCoachingInfo from "../../../queries/domain/coaching/useAppliedCoachingInfo";

const CoachingDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: coachingInfo } = useAppliedCoachingInfo(id);
  const childInfo = useRecoilValue(selectedChildInfoState);
  const setCurrentTaskId = useSetRecoilState(currentTaskIdState);
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (scrollY === scrollRef?.current?.scrollTop) {
        setScrolling(false);
      }
    }, 500);
  }, [scrollY]);

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
      <LayoutDetailPage handleBackBtnClick={() => navigate(-1)}>
        <S.PageTitleWrap>
          <S.Title>{coachingInfo.name}</S.Title>
          <S.ProgramStatus>
            <S.ProceedStatus color={coachingInfo.date_remain >= 0 ? "#00c7b1" : "#8D8D8D"}>
              {coachingInfo.date_remain >= 0 ? "진행중" : "종료"}
            </S.ProceedStatus>
            <span>~{getDate(coachingInfo.end_date)}</span>
            <span>
              {coachingInfo.date_remain > 0 && coachingInfo.date_remain + "일 남음"}
              {coachingInfo.date_remain === 0 && "오늘까지!"}
            </span>
          </S.ProgramStatus>
        </S.PageTitleWrap>
        <S.ShadowBox scrolling={scrolling} />
        <S.ListScroll
          ref={scrollRef}
          onScroll={() => {
            setScrollY(scrollRef?.current?.scrollTop);
            if (!scrolling) {
              setScrolling(true);
            }
          }}
        >
          <S.DetailTitle>⛳️ 결과지</S.DetailTitle>
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
          <S.DetailTitle>✅ 과제</S.DetailTitle>
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
        </S.ListScroll>
        <CustomModal
          cancelBtn={false}
          topImage={
            <UseImgix
              srcUrl={"/images/icon-sad-circle.svg"}
              alt="character"
              style={{ width: "9.5rem" }}
            />
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
