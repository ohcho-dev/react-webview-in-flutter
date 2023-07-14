import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import Button from "../../../components/common/Button";
import Chip from "../../../components/common/Chip";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import UseImgix from "../../../components/common/Imgix";
import { SurveyInfoType } from "../../../types/apis/program";
import {
  currentSurveyInfoState,
  questionnarieState,
  startQuestionOrderNumState,
  surveyAnswerState,
  surveyCoachingIdState,
} from "../../../store/domain/coaching";
import * as S from "./questionnaire.styled";
import useSelectedTaskInfo from "../../../queries/domain/coaching/useSelectedTaskInfo";
import useSurveyQuestionList from "../../../queries/domain/coaching/useSurveyQuestionList";

const Questionnaire = (): JSX.Element => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  const setQuestionnaireState = useSetRecoilState(questionnarieState);
  const setSurveyAnswer = useSetRecoilState(surveyAnswerState);
  const setSurveyCoachingId = useSetRecoilState(surveyCoachingIdState);
  const [startOrderNum, setStartQuestionOrderNum] = useRecoilState(startQuestionOrderNumState);
  const { data: surveyQuestionList } = useSurveyQuestionList(id);
  const { data: selectedTaskInfo } = useSelectedTaskInfo(id);
  const [currentSurveyInfo, setCurrentSurveyInfo] = useRecoilState(currentSurveyInfoState);
  useEffect(() => {
    if (id && state) setCurrentSurveyInfo({ taskId: id, coachingId: state.coachingId });
  }, [id, state]);

  useEffect(() => {
    if (surveyQuestionList.survey.length) {
      setQuestionnaireState(surveyQuestionList);
      setSurveyAnswer({ survey: [], task_id: surveyQuestionList.id });
      setSurveyCoachingId(state.coachingId);
      const selectedSurvey: SurveyInfoType[] = surveyQuestionList.survey.filter(
        (survey: SurveyInfoType) =>
          survey.id.toString() === surveyQuestionList.first_survey_id.toString(),
      );
      setStartQuestionOrderNum(selectedSurvey[0].order);
    }
  }, [surveyQuestionList]);

  return (
    <LayoutDetailPage
      handleBackBtnClick={() => navigate(-1)}
      bottomBtn
      bottomBtnElement={
        <Button
          content="설문하기"
          theme="black"
          onClick={() => navigate(`/coaching/questionnarie/form/${startOrderNum}`)}
        />
      }
    >
      <S.QuestionnarieWrapper>
        <S.QuestionnarieTitle>{selectedTaskInfo.name}</S.QuestionnarieTitle>
        <Chip status="TSTY_SURVEY" />
        <S.QuestionnarieDescription>{selectedTaskInfo.description}</S.QuestionnarieDescription>
        <S.HowToSection>
          <UseImgix alt="how to img" srcUrl="/images/how-to-img.png" />
        </S.HowToSection>
      </S.QuestionnarieWrapper>
    </LayoutDetailPage>
  );
};

export default Questionnaire;
