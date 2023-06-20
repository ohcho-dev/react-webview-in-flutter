import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { createSurveyAnswerData } from "../../../../../queries/domain/coaching/questionnaireApi";
import Button from "../../../../common/Button";
import CustomModal from "../../../../common/CustomModal";
import LayoutDetailPage from "../../../../../layouts/LayoutDetailPage";
import UseImgix from "../../../../common/Imgix";
import QuestionChoice from "../QuestionChoice";
import QuestionNumberUnit from "../QuestionNumberUnit";
import QuestionTextLong from "../QuestionTextLong";
import QuestionTextSHort from "../QuestionTextShort";
import { QuestionGap, SurveyCategoryTitle } from "../questionnaire.styled";
import { SurveyAnswerType } from "../../../../../types/apis/program";
import { ViewSurveyListType } from "../../../../../types/domain/coaching";
import {
  questionnarieState,
  startQuestionOrderNumState,
  surveyAnswerState,
  surveyTempAnswerState,
} from "../../../../../store/domain/coaching";

const QuestionnaireForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { order } = useParams();
  const scroll = 0;
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openWarningModal, setOpenWarningModal] = useState(false);
  const [surveyInfo, setSurveyInfo] = useState<ViewSurveyListType>({
    id: 0,
    name: "",
    order: 0,
    question: [],
  });
  const questionnaireInfo = useRecoilValue(questionnarieState);
  const [surveyTempAnswer, setSurveyTempAnswer] = useRecoilState(surveyTempAnswerState);
  const [surveyAnswer, setSurveyAnswer] = useRecoilState(surveyAnswerState);
  const startQuestionOrderNum = useRecoilValue(startQuestionOrderNumState);
  const saveSurveyAnswer = useMutation(createSurveyAnswerData, {
    onSuccess: res => {
      if (res.test_result_id) {
        setOpenSuccessModal(true);
      }
    },
  });

  useEffect(() => {
    setSurveyTempAnswer([]);
  }, [questionnaireInfo]);

  useEffect(() => {
    if (order) {
      setSurveyInfo(questionnaireInfo.survey[parseInt(order)]);
    }
  }, [order]);

  const finishSurvey = (updatedSurveyAnswer: SurveyAnswerType) => {
    saveSurveyAnswer.mutate({
      ...surveyAnswer,
      survey: [...surveyAnswer.survey, updatedSurveyAnswer],
    });
    setSurveyTempAnswer([]);
  };

  const handleExitQuestionnaireBtnClick = () => {
    navigate(-1);
    setSurveyAnswer({ task_id: 0, survey: [] });
  };

  const setDataForNextSurvey = (updatedSurveyAnswer: SurveyAnswerType, nextOrder: boolean) => {
    // 전역변수 설문데이터 저장
    setSurveyAnswer({
      ...surveyAnswer,
      survey: [...surveyAnswer.survey, updatedSurveyAnswer],
    });
    // 다음 설문지로 데이터 변경
    setSurveyInfo(
      questionnaireInfo.survey[nextOrder ? surveyInfo.order + 1 : surveyInfo.order - 1],
    );
    navigate(
      `/coaching/questionnarie/form/${nextOrder ? surveyInfo.order + 1 : surveyInfo.order - 1}`,
      { replace: true },
    );
    // 임시 설문 데이터 삭제
    setSurveyTempAnswer([]);
  };

  const handleSubmitSurveyBtnClick = () => {
    let totalScore = 0;
    let answerForSubmit: { id: number; item_id: number | null; content: string | null }[] = [];
    surveyTempAnswer.map(answer => {
      totalScore += answer.score || 0;
      return (answerForSubmit = [
        ...answerForSubmit,
        { id: answer.id, item_id: answer.item_id, content: answer.content },
      ]);
    });

    // 지역변수 설문데이터 저장 (다음 설문지가 없을때를 대비)
    const updatedSurveyAnswer: SurveyAnswerType = {
      id: surveyInfo.id,
      score: totalScore,
      question: answerForSubmit,
    };
    // 만약 총점이 타겟 스코어와 같거나 높다면
    // 1. 만약 이전 설문지가 시작 설문지 보다 아이디가 적으면 > 종료
    // 2. 만약 이전 설문지가 시작 설문지 보다 아이디가 크면 > 다음 설문지
    // 3. 다음 설문지가 없으면 종료
    if (totalScore >= questionnaireInfo.target_score) {
      if (questionnaireInfo.survey[surveyInfo.order + 1]) {
        // 만약 이전 설문지가 시작 설문지 보다 아이디가 적으면 > 종료
        if (startQuestionOrderNum > surveyInfo.order) {
          console.log("이전 설문지가 시작 설문지 보다 아이디가 적으면 > 종료");
          finishSurvey(updatedSurveyAnswer);
        } else {
          // 만약 이전 설문지가 시작 설문지 보다 아이디가 크면 > 다음 설문지
          setDataForNextSurvey(updatedSurveyAnswer, true);
          console.log("만약 이전 설문지가 시작 설문지 보다 아이디가 크면 > 다음 설문지");
        }
      } else {
        // 다음 설문지가 없으면 종료
        console.log("다음 설문지가 없으면 종료");
        finishSurvey(updatedSurveyAnswer);
      }
      // 총점이 타켓 스코어보다 낮다면
      // 1. 만약 이전 설문지가 시작 설문지보다 아이디가 크면 > 종료
      // 2. 만약 이전 설문지가 시작 설문지보다 아이디가 작으면 > 이전 설문지 (최대 3번)
      // 3. 이전 설문지가 없으면 종료
    } else if (totalScore < questionnaireInfo.target_score) {
      if (questionnaireInfo.survey[surveyInfo.order - 1]) {
        //만약 이전 설문지가 시작 설문지보다 아이디가 크거나 3번 초과로 이전 설문지로 넘어갔을때 > 종료
        if (
          startQuestionOrderNum < surveyInfo.order ||
          startQuestionOrderNum - surveyInfo.order > 2
        ) {
          console.log("이전 설문지가 시작 설문지보다 아이디가 크면 > 종료");
          finishSurvey(updatedSurveyAnswer);
        } else {
          // 만약 이전 설문지가 시작 설문지보다 아이디가 작으면 > 이전 설문지
          console.log("이전 설문지가 시작 설문지보다 아이디가 작으면 > 이전 설문지");
          setDataForNextSurvey(updatedSurveyAnswer, false);
        }
      } else {
        // 다음 설문지가 없으면 종료
        finishSurvey(updatedSurveyAnswer);
      }
    }
  };
  return (
    <div className="list-section" style={{ touchAction: "pan-y" }}>
      <LayoutDetailPage
        bottomScrollAnimationEffect={true}
        hideTitleBar
        style={{
          borderBottom: "none",
          top: 0,
          height: "calc(100vh - 7.4rem)",
          touchAction: "pan-y",
        }}
        bottomBtn
        bottomBtnElement={
          <Button
            theme={`${
              surveyInfo.question.length === surveyTempAnswer.length ? "black" : "disabled"
            }`}
            content="완료하기"
            onClick={handleSubmitSurveyBtnClick}
          />
        }
      >
        <SurveyCategoryTitle scroll={scroll}>
          <div onClick={() => setOpenWarningModal(true)}>
            <UseImgix srcUrl="/images/icon-back.svg" alt="left arrow icon" />
          </div>
          <span style={{ marginLeft: "1rem" }}>{surveyInfo?.name}</span>
          <UseImgix alt="form character" srcUrl="/images/form-character.svg" />
        </SurveyCategoryTitle>
        {surveyInfo.question.length &&
          surveyInfo.question.map((question, index: number) => {
            switch (question.type) {
              case "SVQT_CHOICE":
                return (
                  <div key={`${question.content + question.id}`}>
                    <QuestionChoice
                      questionNumber={index + 1}
                      question={question}
                      totalQuestionNum={surveyInfo.question.length}
                    />
                    {index !== surveyInfo.question.length - 1 && (
                      <QuestionGap key={`${question.content + question.id}`} />
                    )}
                  </div>
                );
              case "SVQT_TEXT_LONG":
                return (
                  <div key={`${question.content + question.id}`}>
                    <QuestionTextLong
                      questionNumber={index + 1}
                      question={question}
                      totalQuestionNum={surveyInfo.question.length}
                    />
                    {index !== surveyInfo.question.length - 1 && (
                      <QuestionGap key={`${question.content + question.id}`} />
                    )}
                  </div>
                );
              case "SVQT_TEXT_SHORT":
                return (
                  <div key={`${question.content + question.id}`}>
                    <QuestionTextSHort
                      questionNumber={index + 1}
                      question={question}
                      totalQuestionNum={surveyInfo.question.length}
                    />
                    {index !== surveyInfo.question.length - 1 && (
                      <QuestionGap key={`${question.content + question.id}`} />
                    )}
                  </div>
                );
              case "SVQT_NUMBER":
                return (
                  <div key={`${question.content + question.id}`}>
                    <QuestionNumberUnit
                      questionNumber={index + 1}
                      question={question}
                      totalQuestionNum={surveyInfo.question.length}
                    />
                    {index !== surveyInfo.question.length - 1 && (
                      <QuestionGap key={`${question.content + question.id}`} />
                    )}
                  </div>
                );
              default:
                return false;
            }
          })}
      </LayoutDetailPage>
      <CustomModal
        content="지금까지 작성하신 모든 설문이 사라집니다."
        isOpen={openWarningModal}
        okBtnClick={handleExitQuestionnaireBtnClick}
        toggleModal={() => setOpenWarningModal(!openWarningModal)}
        cancelBtnClick={() => setOpenWarningModal(!openWarningModal)}
        cancelbtn
        title="정말로 나가시겠습니까?"
      />
      <CustomModal
        content="선택한 답변은 설문 상태 확인 페이지에서 다시 확인하실 수 있어요."
        isOpen={openSuccessModal}
        okBtnClick={() => navigate(-2)}
        toggleModal={() => setOpenSuccessModal(!openSuccessModal)}
        title="설문 답변을 완료했어요."
        cancelbtn={false}
      />
    </div>
  );
};

export default QuestionnaireForm;
