import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { createSurveyAnswerData } from "../../../api/questionnaireApi";
import Button from "../../../components/common/Button";
import CustomModal from "../../../components/common/CustomModal";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import {
  questionnarieState,
  startQuestionOrderNumState,
  surveyAnswerState,
  surveyCoachingIdState,
  surveyTempAnswerState,
} from "../../../recoil/atom";
import { SurveyAnswerType, SurveyInfoType } from "../../../utils/type";
import Question from "./Question";

const FormWrapper = styled.div``;

const FormTitle = styled.div`
  margin: 0 2rem;
  padding: 1.5rem 1rem;

  font-weight: 500;
  font-size: 1.8rem;
  color: rgba(10, 10, 10, 0.8);

  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  img {
    margin-left: 0.5rem;
  }
`;

const QuestionGap = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #f6f6f6;
`;

const QuestionnaireForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { order } = useParams();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [surveyInfo, setSurveyInfo] = useState<SurveyInfoType>({
    id: 0,
    name: "",
    order: 0,
    question: [],
  });
  const questionnaireInfo = useRecoilValue(questionnarieState);
  const surveyCoachingId = useRecoilValue(surveyCoachingIdState);
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
    );
    // 임시 설문 데이터 삭제
    setSurveyTempAnswer([]);
  };

  const handleSubmitSurveyBtnClick = () => {
    let totalScore: number = 0;
    let answerForSubmit: { id: number; item_id: number }[] = [];
    surveyTempAnswer.map(answer => {
      totalScore += answer.score;
      answerForSubmit = [...answerForSubmit, { id: answer.id, item_id: answer.item_id }];
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
    <>
      <LayoutDetailPage
        style={{ borderBottom: "none" }}
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
        <FormWrapper>
          <FormTitle>
            {surveyInfo?.name}
            <img alt="form character" src="/images/form-character.svg" />
          </FormTitle>
          {surveyInfo.question.map((question, index: number) => {
            return (
              <div key={`${question.content + question.id}`}>
                <Question questionNumber={index + 1} question={question} />
                {index !== surveyInfo.question.length - 1 && (
                  <QuestionGap key={`${question.content + question.id}`} />
                )}
              </div>
            );
          })}
        </FormWrapper>
      </LayoutDetailPage>
      <CustomModal
        content="선택한 답변은 설문 상태 확인 페이지에서 다시 확인하실 수 있어요."
        isOpen={openSuccessModal}
        okBtnClick={() => navigate(`/coaching/coaching-detail/${surveyCoachingId}`)}
        toggleModal={() => setOpenSuccessModal(!openSuccessModal)}
        title="설문 답변을 완료했어요."
      />
    </>
  );
};

export default QuestionnaireForm;
