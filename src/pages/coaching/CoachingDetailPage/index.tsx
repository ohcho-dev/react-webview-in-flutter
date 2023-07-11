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
import { currentTaskIdState, selectedCategoryIdState } from "../../../store/domain/coaching";
import * as S from "./coachingDetail.styled";
import useAppliedCoachingInfo from "../../../queries/domain/coaching/useAppliedCoachingInfo";
import ProgressStatusBadge from "components/domain/coaching/coachingDetailPage/ProgressStatusBadge";
import CustomToggle from "components/common/CustomToggle";
import useOpenResultPaper from "queries/domain/coaching/useOpenResultPaper";
import useSelectedChild from "queries/domain/my/child/useSelectedChild";

const CoachingDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { id: childId } = useRecoilValue(selectedChildInfoState);
  const setCurrentTaskId = useSetRecoilState(currentTaskIdState);
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);
  const { data: coachingInfo } = useAppliedCoachingInfo(id);
  const { mutate: setOpenResultPaper } = useOpenResultPaper();
  const { data: selectedChildInfo } = useSelectedChild(childId.toString());

  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
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
            <ProgressStatusBadge isFinished={coachingInfo.date_remain === 0} />
            <S.CoachingProgramDuration>~{getDate(coachingInfo.end_date)}</S.CoachingProgramDuration>
            <S.CoachingProgramDuration>
              {coachingInfo.date_remain > 0 && coachingInfo.date_remain + "일 남음"}
              {coachingInfo.date_remain === 0 && "오늘까지!"}
            </S.CoachingProgramDuration>
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
          <S.CoachingDetailTitleBox>
            <UseImgix srcUrl={"/images/result_paper_new.svg"} />
            <S.DetailTitle>결과지</S.DetailTitle>
          </S.CoachingDetailTitleBox>
          {coachingInfo.result_paper.map(
            ({ name, status, paper_url, is_open, id }: CoachingStatusType, index: number) => (
              <S.ContentSection key={id}>
                <ContentItem
                  style={{ marginBottom: "0" }}
                  key={index + name}
                  coachingMethod="result"
                  chipStatus={[status]}
                  name={name}
                  useArrowBtn={true}
                  handleClick={() => {
                    //기간 및 과제 완성과 별개로 결과지가 발행되면 페이지 링크
                    if (status === "TTPST_COMPLETE") {
                      if (selectedChildInfo[0].has_organization) {
                        navigate(`/coaching/daycare/resultPaper/${id}`);
                        setSelectedCategoryId(0);
                      } else {
                        navigate(`/coaching/result/${paper_url}`);
                      }
                    } else {
                      setOpenModal(true);
                    }
                  }}
                />
                {selectedChildInfo[0].has_organization && (
                  <S.SharedResultPaperBox isShared={is_open === 1}>
                    <S.SharedResultPaperBoxTextSection>
                      <S.SharedResultPaperBoxTitle isShared={is_open === 1}>
                        결과지 공유
                      </S.SharedResultPaperBoxTitle>
                      <S.SharedResultPaperBoxText isShared={is_open === 1}>
                        담임 선생님이 보육활동 참고를 위해 결과지를 확인하는것에 동의해요.
                      </S.SharedResultPaperBoxText>
                    </S.SharedResultPaperBoxTextSection>
                    <div>
                      <CustomToggle
                        value={is_open === 1}
                        handleValue={() => setOpenResultPaper(id)}
                        size="sm"
                      />
                    </div>
                  </S.SharedResultPaperBox>
                )}
              </S.ContentSection>
            ),
          )}
          <S.CoachingDetailTitleBox>
            <UseImgix srcUrl={"/images/books.svg"} />
            <S.DetailTitle>과제</S.DetailTitle>
          </S.CoachingDetailTitleBox>
          <S.ContentSection>
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
                        navigate(`/coaching/questionnarie/${task.id}`, {
                          state: { coachingId: id },
                        });
                    } else if (task.status === "TSST_COMPLETE") {
                      navigate(`/coaching/questionnarie/detail/${task.id}`);
                    }
                  } else if (task.task_type === "TSTY_VIDEO") {
                    if (task.status === "TSST_ONGOING") {
                      coachingInfo.date_remain >= 0 &&
                        NativeFunction(
                          "routeNativeScreen",
                          `coachingVideoDetail@${task.id}@${childId}`,
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
          </S.ContentSection>
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
