import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getSelectedTaskInfo } from "../../api/coachingApi";
import { getSurveyQuestionList } from "../../api/questionnaireApi";
import Button from "../../components/common/Button";
import Chip from "../../components/common/Chip";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import {
  questionnarieState,
  startQuestionOrderNumState,
  surveyAnswerState,
  surveyCoachingIdState,
} from "../../recoil/atom";
import { SurveyInfoType } from "../../utils/type";

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
      bottomBtn
      bottomBtnElement={
        <Button
          content="설문하기"
          theme="black"
          onClick={() =>
            navigate(`/coaching/questionnarie/form/${startOrderNum}`, { replace: true })
          }
        />
      }
    >
      <QuestionnarieWrapper>
        <QuestionnarieTitle>{selectedTaskInfo.name}</QuestionnarieTitle>
        <Chip status="TSTY_SURVEY" />
        <QuestionnarieDescription>{selectedTaskInfo.description}</QuestionnarieDescription>
        <HowToSection>
          <img alt="how to img" src="/images/how-to-img.svg" />
        </HowToSection>
      </QuestionnarieWrapper>
    </LayoutDetailPage>
  );
};

export default Questionnaire;
