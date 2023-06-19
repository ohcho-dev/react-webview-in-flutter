import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getSelectedTaskInfo } from "../../apis/coachingApi";
import { getSurveyQuestionList } from "../../apis/questionnaireApi";
import Button from "../../components/common/Button";
import Chip from "../../components/common/Chip";
import { queryKeys } from "../../constants/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import {
  currentSurveyInfoState,
  questionnarieState,
  startQuestionOrderNumState,
  surveyAnswerState,
  surveyCoachingIdState,
} from "../../store/atom";
import { SurveyInfoType } from "../../utils/type";
import UseImgix from "../../components/common/Imgix";

const QuestionnarieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const QuestionnarieTitle = styled.div`
  font-size: 2.6rem;
  font-weight: 600;

  margin-bottom: 1rem;
`;

const QuestionnarieDescription = styled.div`
  width: 100%;
  line-height: 2.2rem;
  font-weight: 400;
  font-size: 1.6rem;

  margin-top: 1.5rem;
  margin-bottom: 4rem;
`;

const HowToSection = styled.div`
  img {
    width: 100%;
  }
`;

const Questionnaire = (): JSX.Element => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  const setQuestionnaireState = useSetRecoilState(questionnarieState);
  const setSurveyAnswer = useSetRecoilState(surveyAnswerState);
  const setSurveyCoachingId = useSetRecoilState(surveyCoachingIdState);
  const [startOrderNum, setStartQuestionOrderNum] = useRecoilState(startQuestionOrderNumState);
  const { data: surveyQuestionList } = useQuery(queryKeys.surveyQuestionList, () =>
    getSurveyQuestionList(id),
  );
  const { data: selectedTaskInfo } = useQuery(queryKeys.selectedTaskInfo, () =>
    getSelectedTaskInfo(id),
  );
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
      <QuestionnarieWrapper>
        <QuestionnarieTitle>{selectedTaskInfo.name}</QuestionnarieTitle>
        <Chip status="TSTY_SURVEY" />
        <QuestionnarieDescription>{selectedTaskInfo.description}</QuestionnarieDescription>
        <HowToSection>
          <UseImgix alt="how to img" srcUrl="/images/how-to-img.png" />
        </HowToSection>
      </QuestionnarieWrapper>
    </LayoutDetailPage>
  );
};

export default Questionnaire;
